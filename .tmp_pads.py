
from PIL import Image, ImageDraw
import numpy as np, os

src = r"C:\Users\alexk\.dsh\attachments\v1\objects\63\633a39ac32e949ece7117b8f52a74e04cd389cac850e30f044b57cd17e8af8a5"
im = Image.open(src).convert("RGBA")
a = np.array(im).astype(int)
lum = a[:, :, :3].sum(axis=2)
ys, xs = np.where(lum < 600)
x0, y0, x1, y1 = xs.min(), ys.min(), xs.max()+1, ys.max()+1
mark = im.crop((x0, y0, x1, y1))

def build(pad, radius_ratio):
    S = 512
    inner = int(S * (1 - 2*pad))
    sc = inner / max(mark.size)
    m = mark.resize((max(1,int(mark.width*sc)), max(1,int(mark.height*sc))), Image.LANCZOS)
    tile = Image.new("RGBA", (S,S), (0,0,0,0))
    mask = Image.new("L", (S,S), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0,0,S-1,S-1], radius=int(S*radius_ratio), fill=255)
    tile.paste(Image.new("RGBA",(S,S),(255,255,255,255)), (0,0), mask)
    tile.alpha_composite(m, ((S-m.width)//2, (S-m.height)//2))
    return tile

prev = Image.new("RGB", (560, 210), (245,246,248))
y = 30
for label, pad, rr in [("pad 16%", 0.16, 0.20), ("pad 10%", 0.10, 0.18), ("pad 6%", 0.06, 0.16)]:
    t = build(pad, rr)
    x = 20
    for px in (16, 32, 48, 96):
        i = t.resize((px,px), Image.LANCZOS)
        prev.paste(i, (x, y), i)
        x += px + 22
    y += 96 if label == "pad 6%" else 0
    if label != "pad 6%":
        y = 30
prev.save(".tmp_pads.png")
print("ok")
