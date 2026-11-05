
from PIL import Image, ImageDraw
import numpy as np, os

src = r"C:\Users\alexk\.dsh\attachments\v1\objects\63\633a39ac32e949ece7117b8f52a74e04cd389cac850e30f044b57cd17e8af8a5"
im = Image.open(src).convert("RGBA")
a = np.array(im).astype(int)
# contenido = pixeles claramente no blancos
lum = a[:, :, :3].sum(axis=2)
content = lum < 600
ys, xs = np.where(content)
x0, y0, x1, y1 = xs.min(), ys.min(), xs.max()+1, ys.max()+1
print("bbox de contenido:", (x0, y0, x1, y1), "->", (x1-x0, y1-y0))
mark = im.crop((x0, y0, x1, y1))

S = 512
pad = 0.16
inner = int(S * (1 - 2*pad))
scale = inner / max(mark.size)
mark_r = mark.resize((max(1,int(mark.width*scale)), max(1,int(mark.height*scale))), Image.LANCZOS)

tile = Image.new("RGBA", (S,S), (0,0,0,0))
mask = Image.new("L", (S,S), 0)
ImageDraw.Draw(mask).rounded_rectangle([0,0,S-1,S-1], radius=int(S*0.20), fill=255)
white = Image.new("RGBA", (S,S), (255,255,255,255))
tile.paste(white, (0,0), mask)
tile.alpha_composite(mark_r, ((S-mark_r.width)//2, (S-mark_r.height)//2))

for name, px in {"apple-touch-icon.png":180, "favicon-48.png":48, "favicon-32.png":32, "favicon-16.png":16}.items():
    tile.resize((px,px), Image.LANCZOS).save(os.path.join("public", name), optimize=True)
    print(name, px, round(os.path.getsize(os.path.join("public",name))/1024,2), "KB")

tile.resize((48,48), Image.LANCZOS).save("public/favicon.ico", format="ICO", sizes=[(16,16),(32,32),(48,48)])
print("favicon.ico", round(os.path.getsize("public/favicon.ico")/1024,2), "KB")

# vista previa a tamanos reales
prev = Image.new("RGB", (420, 190), (245,246,248))
x = 30
for px in (16, 32, 48, 128):
    ico = tile.resize((px,px), Image.LANCZOS)
    prev.paste(ico, (x, 40), ico)
    x += px + 30
prev.save(".tmp_fav_preview.png")
print("preview ok")
