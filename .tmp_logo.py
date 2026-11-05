
from PIL import Image
im = Image.open(r"C:\Users\alexk\.dsh\attachments\v1\objects\63\633a39ac32e949ece7117b8f52a74e04cd389cac850e30f044b57cd17e8af8a5")
print('size', im.size, 'mode', im.mode)
im2 = im.convert('RGBA')
# colores dominantes
from collections import Counter
c = Counter(im2.getdata())
for col, n in c.most_common(8):
    print(col, n)
# bounding box del contenido no blanco
import numpy as np
a = np.array(im2)
alpha = a[:,:,3]
rgb = a[:,:,:3].astype(int)
nonwhite = (rgb.sum(axis=2) < 720) & (alpha > 20)
ys, xs = np.where(nonwhite)
print('bbox', xs.min(), ys.min(), xs.max(), ys.max())
