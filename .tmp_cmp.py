
from PIL import Image, ImageDraw
src = r"C:\Users\alexk\.dsh\attachments\v1\objects\63\633a39ac32e949ece7117b8f52a74e04cd389cac850e30f044b57cd17e8af8a5"
logo = Image.open(src).convert("RGBA")

W, H = 480, 260
canvas = Image.new("RGBA", (W, H), (245, 246, 248, 255))
d = ImageDraw.Draw(canvas)

# --- izquierda: favicon actual (cuadrado azul redondeado con M blanca) ---
box = 150
fx, fy = 60, 55
tile = Image.new("RGBA", (box, box), (0,0,0,0))
td = ImageDraw.Draw(tile)
td.rounded_rectangle([0,0,box-1,box-1], radius=34, fill=(37,99,235,255))
# M blanca escalada del viewBox 64
sx = box/64.0
pts = [(15,47),(15,17),(23.5,17),(32,29.5),(40.5,17),(49,17),(49,47),(40.5,47),(40.5,31),(32,42.5),(23.5,31),(23.5,47)]
td.polygon([(x*sx, y*sx) for x,y in pts], fill=(255,255,255,255))
canvas.alpha_composite(tile, (fx, fy))

# --- derecha: logo del usuario ---
lb = logo.split()[3].getbbox()
logo_c = logo.crop(lb)
scale = 150 / max(logo_c.size)
logo_r = logo_c.resize((max(1,int(logo_c.width*scale)), max(1,int(logo_c.height*scale))), Image.LANCZOS)
canvas.alpha_composite(logo_r, (fx + 270 + (150-logo_r.width)//2, fy + (150-logo_r.height)//2))

d.text((fx + 10, fy + 185), "favicon actual", fill=(30,30,35,255))
d.text((fx + 280, fy + 185), "tu logo MANUTIC", fill=(30,30,35,255))
canvas.convert("RGB").save('.tmp_compare.png')
print('ok')
