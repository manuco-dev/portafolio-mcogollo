
from PIL import Image, ImageDraw
import numpy as np, os

src = r"C:\Users\alexk\.dsh\attachments\v1\objects\63\633a39ac32e949ece7117b8f52a74e04cd389cac850e30f044b57cd17e8af8a5"
im = Image.open(src).convert("RGBA")
a = np.array(im).astype(int)
lum = a[:, :, :3].sum(axis=2)
ys, xs = np.where(lum < 600)
mark = im.crop((xs.min(), ys.min(), xs.max()+1, ys.max()+1))

S, PAD, RAD = 512, 0.09, 0.18
inner = int(S * (1 - 2*PAD))
sc = inner / max(mark.size)
m = mark.resize((max(1,int(mark.width*sc)), max(1,int(mark.height*sc))), Image.LANCZOS)

tile = Image.new("RGBA", (S,S), (0,0,0,0))
mask = Image.new("L", (S,S), 0)
ImageDraw.Draw(mask).rounded_rectangle([0,0,S-1,S-1], radius=int(S*RAD), fill=255)
tile.paste(Image.new("RGBA",(S,S),(255,255,255,255)), (0,0), mask)
tile.alpha_composite(m, ((S-m.width)//2, (S-m.height)//2))

for name, px in {"apple-touch-icon.png":180, "favicon-48.png":48, "favicon-32.png":32, "favicon-16.png":16}.items():
    tile.resize((px,px), Image.LANCZOS).save(os.path.join("public", name), optimize=True)
    print(name, px, round(os.path.getsize(os.path.join("public",name))/1024,2), "KB")
tile.resize((48,48), Image.LANCZOS).save("public/favicon.ico", format="ICO", sizes=[(16,16),(32,32),(48,48)])
print("favicon.ico", round(os.path.getsize("public/favicon.ico")/1024,2), "KB")
