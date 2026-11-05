
from PIL import Image, ImageDraw
import os

src = r"C:\Users\alexk\.dsh\attachments\v1\objects\63\633a39ac32e949ece7117b8f52a74e04cd389cac850e30f044b57cd17e8af8a5"
im = Image.open(src).convert("RGBA")

# 1) recortar al contenido real del logo
bbox = im.split()[3].getbbox()
mark = im.crop(bbox)
print("recorte:", mark.size)

# 2) lienzo cuadrado, con margen, fondo blanco (para que el chevron negro
#    no desaparezca sobre barras de pestañas oscuras)
S = 512
pad_ratio = 0.14
inner = int(S * (1 - 2 * pad_ratio))
scale = inner / max(mark.size)
mark_r = mark.resize((max(1, int(mark.width*scale)), max(1, int(mark.height*scale))), Image.LANCZOS)

tile = Image.new("RGBA", (S, S), (0, 0, 0, 0))
white = Image.new("RGBA", (S, S), (255, 255, 255, 255))
mask = Image.new("L", (S, S), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, S-1, S-1], radius=int(S*0.20), fill=255)
tile.paste(white, (0, 0), mask)
tile.alpha_composite(mark_r, ((S - mark_r.width)//2, (S - mark_r.height)//2))

# 3) tamanos
sizes = {"apple-touch-icon.png": 180, "favicon-48.png": 48, "favicon-32.png": 32, "favicon-16.png": 16}
for name, px in sizes.items():
    out = tile.resize((px, px), Image.LANCZOS)
    out.save(os.path.join("public", name), optimize=True)
    print(name, px, round(os.path.getsize(os.path.join("public", name))/1024, 2), "KB")

# 4) .ico multi-tamano
tile.resize((256,256), Image.LANCZOS).save("public/favicon.ico", format="ICO",
    sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
print("favicon.ico", round(os.path.getsize("public/favicon.ico")/1024, 2), "KB")
