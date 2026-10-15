"""Build the itch.io upload: dist/Captains_Log.zip.

itch runs browser games from an index.html at the top of the zip, so the app
(CaptainsLog.html) is packed as index.html alongside the files it loads. The
same zip works as the offline download (players extract it and open
index.html). Run from anywhere:  python itch/build_zip.py
"""
import glob, os, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
ASSET_DIRS = ['badges', 'bridgebgs', 'shipthumbs', 'zine']
EXTRA = ['guide.html', 'uniforms/era-2409.png']   # the only uniform image the app uses

files = list(EXTRA)
for d in ASSET_DIRS:
    files += sorted(f.replace(os.sep, '/') for f in glob.glob(d + '/*')
                    if os.path.isfile(f) and not f.endswith('.svg'))   # the SVG patch is unused
readme = open('itch/READ ME FIRST.txt', encoding='utf-8').read()
readme = readme.replace('\r\n', '\n').replace('\n', '\r\n')            # Notepad-friendly

os.makedirs('dist', exist_ok=True)
out = 'dist/Captains_Log.zip'
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    z.write('CaptainsLog.html', 'index.html')
    z.writestr('READ ME FIRST.txt', readme.encode('utf-8'))
    for f in files:
        z.write(f, f)

z = zipfile.ZipFile(out)
assert z.testzip() is None and 'index.html' in z.namelist()
print(f'{out}: {len(z.namelist())} files, {os.path.getsize(out) / 1e6:.2f} MB, index.html at the top level')
