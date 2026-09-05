import math
from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1920, 1080
img = Image.new('RGB', (WIDTH, HEIGHT), color='#090c10')
draw = ImageDraw.Draw(img)

# Fonts
font_title = ImageFont.truetype('C:\\Windows\\Fonts\\consolab.ttf', 24)
font_sub = ImageFont.truetype('C:\\Windows\\Fonts\\consola.ttf', 16)
font_box_title = ImageFont.truetype('C:\\Windows\\Fonts\\consolab.ttf', 16)
font_box_body = ImageFont.truetype('C:\\Windows\\Fonts\\consola.ttf', 14)
font_metric = ImageFont.truetype('C:\\Windows\\Fonts\\consolab.ttf', 18)
font_dim = ImageFont.truetype('C:\\Windows\\Fonts\\consolab.ttf', 16)

# 1. Subtle Engineering Grid
for x in range(0, WIDTH, 40):
    color = '#10151f' if x % 200 != 0 else '#182030'
    draw.line([(x, 0), (x, HEIGHT)], fill=color, width=1)

for y in range(0, HEIGHT, 40):
    color = '#10151f' if y % 200 != 0 else '#182030'
    draw.line([(0, y), (WIDTH, y)], fill=color, width=1)

# Outer blueprint border
draw.rectangle([(20, 20), (WIDTH - 20, HEIGHT - 20)], outline='#2d333b', width=2)
draw.rectangle([(26, 26), (WIDTH - 26, HEIGHT - 26)], outline='#1c2128', width=1)

# Header Title Block
draw.rectangle([(40, 40), (WIDTH - 40, 130)], fill='#0d1117', outline='#30363d', width=2)
draw.text((60, 50), "HONDA MOTOR CO., LTD. — GLOBAL R&D AUTOMOTIVE PLATFORM ARCHITECTURE", font=font_sub, fill='#8b949e')
draw.text((60, 78), "2003 HONDA ACCORD SEDAN (CM5/CM6) — 4-WHEEL DOUBLE-WISHBONE MONOCOQUE CHASSIS", font=font_title, fill='#f0f6fc')

# Header Right Badges
draw.text((WIDTH - 480, 50), "TECHNICAL ARCHIVE SPECIFICATION", font=font_sub, fill='#8b949e')
draw.text((WIDTH - 480, 72), "TORSIONAL RIGIDITY: +27% (1,480 N·m/deg)", font=font_metric, fill='#3fb950')
draw.text((WIDTH - 480, 96), "HIGH-STRENGTH STEEL COMPOSITION: 48% HSS", font=font_metric, fill='#d29922')

# Ground Line & Shadows
draw.line([(80, 760), (1840, 760)], fill='#21262d', width=2)
draw.text((90, 768), "GROUND DATUM LINE — OEM GROUND CLEARANCE: 150 mm", font=font_sub, fill='#6e7681')

# Silhouette points for 2003 Accord Sedan (Wedge aerofoil)
profile_points = [
    (170, 680),  # Front lower valence
    (160, 630),  # Front bumper apex
    (180, 570),  # Front grille/nose
    (240, 525),  # Headlamp hood crease
    (380, 495),  # Front fender arc
    (520, 475),  # Low cowl datum line (-25mm)
    (690, 330),  # A-pillar slope
    (840, 280),  # Front roof crest
    (1140, 290), # Rear roof apex
    (1330, 410), # Fastback rear window rake
    (1450, 500), # Trunk decklid base
    (1580, 505), # High aerodynamic ducktail edge
    (1590, 575), # Rear taillamp lens edge
    (1560, 650), # Rear bumper lower wrap
    (1480, 680), # Rear underbody exhaust exit
]

# Body wireframe outline (ghosted silver-grey)
draw.line(profile_points, fill='#38434f', width=3)
# Window frame line
window_line = [
    (550, 475),
    (700, 345),
    (1120, 310),
    (1300, 425),
    (1310, 505),
    (550, 505),
    (550, 475)
]
draw.line(window_line, fill='#22272e', width=2)

# Wheel Wells & Wheels
draw.arc([(340, 530), (580, 770)], start=180, end=0, fill='#30363d', width=3)
draw.arc([(1200, 530), (1440, 770)], start=180, end=0, fill='#30363d', width=3)

draw.ellipse([(360, 550), (560, 750)], outline='#21262d', width=2)
draw.ellipse([(430, 620), (490, 680)], outline='#58a6ff', width=2) # front hub
draw.ellipse([(1220, 550), (1420, 750)], outline='#21262d', width=2)
draw.ellipse([(1290, 620), (1350, 680)], outline='#3fb950', width=2) # rear hub

# STRUCTURAL MONOCOQUE CHASSIS RAILS (COLOR-CODED)

# 1. Boxed Rocker Longitudinal Reinforcements (High Strength Gold #d29922)
draw.line([(580, 680), (1200, 680)], fill='#d29922', width=10)
draw.line([(580, 696), (1200, 696)], fill='#e3b341', width=4)

# 2. Front Hydroformed Engine Subframe & Crash Rails (Blue #58a6ff)
front_subframe = [
    (180, 640),
    (290, 630),
    (430, 610),
    (550, 610),
    (580, 680)
]
draw.line(front_subframe, fill='#58a6ff', width=8)

# Front Double-Wishbone Shock Tower & Cowl Bracing
draw.line([(430, 610), (470, 495)], fill='#58a6ff', width=6)
draw.line([(470, 495), (550, 475)], fill='#58a6ff', width=6)
draw.line([(470, 495), (380, 610)], fill='#58a6ff', width=4) # front triangle brace

# 3. Passenger Cabin Ultra-High-Strength Steel Roll Cage (Gold #d29922)
# A-Pillar
draw.line([(550, 475), (700, 345)], fill='#d29922', width=8)
# Roof Cant Rail (Top Arch)
draw.line([(700, 345), (1130, 310)], fill='#d29922', width=8)
# B-Pillar Central Pillar (Laser Tailored Blank)
draw.line([(915, 310), (915, 680)], fill='#d29922', width=9)
# C-Pillar Structural Ring
draw.line([(1130, 310), (1310, 490)], fill='#d29922', width=8)
draw.line([(1310, 490), (1310, 680)], fill='#d29922', width=6)

# 4. Rear Multi-Link Subframe & Tower Cage (Teal #3fb950)
rear_subframe = [
    (1200, 680),
    (1270, 615),
    (1390, 615),
    (1530, 640)
]
draw.line(rear_subframe, fill='#3fb950', width=8)
# Rear shock tower tie
draw.line([(1270, 615), (1270, 500)], fill='#3fb950', width=6)
draw.line([(1270, 500), (1310, 490)], fill='#3fb950', width=5)

# Floor Crossmembers & Central Structural Tunnel
draw.line([(700, 680), (760, 640), (860, 640), (915, 680)], fill='#484f58', width=4)
draw.line([(915, 680), (980, 640), (1080, 640), (1140, 680)], fill='#484f58', width=4)
draw.line([(580, 645), (1200, 645)], fill='#6e7681', width=3) # central tunnel

# 5. DIMENSIONAL ARROWS
# Wheelbase: 2,740 mm
draw.line([(460, 810), (1320, 810)], fill='#58a6ff', width=3)
draw.line([(460, 795), (460, 825)], fill='#58a6ff', width=3)
draw.line([(1320, 795), (1320, 825)], fill='#58a6ff', width=3)
draw.text((760, 820), "◄--- WHEELBASE: 2,740 mm (107.9 in) ---►", font=font_dim, fill='#58a6ff')

# Overall Length: 4,813 mm
draw.line([(160, 880), (1590, 880)], fill='#f0f6fc', width=2)
draw.line([(160, 865), (160, 895)], fill='#f0f6fc', width=2)
draw.line([(1590, 865), (1590, 895)], fill='#f0f6fc', width=2)
draw.text((710, 890), "◄--- OVERALL VEHICLE LENGTH: 4,813 mm (189.5 in) ---►", font=font_dim, fill='#f0f6fc')

# 6. ENHANCED TECHNICAL CALLOUTS WITH READABLE FONT

def draw_callout(box_x, box_y, box_w, box_h, title, line1, line2, target_x, target_y, color):
    # Anchor line
    draw.line([(target_x, target_y), (box_x + box_w // 2, box_y + box_h)], fill=color, width=2)
    draw.ellipse([(target_x - 4, target_y - 4), (target_x + 4, target_y + 4)], fill=color)
    # Box
    draw.rectangle([(box_x, box_y), (box_x + box_w, box_y + box_h)], fill='#161b22', outline=color, width=2)
    draw.text((box_x + 14, box_y + 12), title, font=font_box_title, fill=color)
    draw.text((box_x + 14, box_y + 36), line1, font=font_box_body, fill='#c9d1d9')
    draw.text((box_x + 14, box_y + 56), line2, font=font_box_body, fill='#8b949e')

# Callout 1: Hydroformed Front Subframe
draw_callout(40, 360, 330, 85, "HYDROFORMED FRONT RAILS", "3-Stage progressive crumple rate", "Absorbs 40% frontal collision load", 260, 630, '#58a6ff')

# Callout 2: Front Double-Wishbone Towers
draw_callout(260, 200, 340, 85, "DOUBLE-WISHBONE TOWERS", "Race-derived upper A-arm pickup", "Isolates lateral suspension forces", 470, 495, '#58a6ff')

# Callout 3: B-Pillar Laser Tailored Blank
draw_callout(720, 160, 360, 85, "LASER-WELDED B-PILLAR", "Variable-gauge high-strength steel", "Meets FMVSS 214 side barrier test", 915, 380, '#d29922')

# Callout 4: Boxed Rocker Sills
draw_callout(530, 700, 350, 85, "BOXED ROCKER LONGITUDINALS", "+27% Torsional stiffness expansion", "Tri-layer continuous laser weld", 750, 680, '#d29922')

# Callout 5: Rear 5-Link Multi-Link Subframe
draw_callout(1360, 320, 360, 85, "5-LINK REAR SUBFRAME HARDPOINTS", "Rubber-bushed anti-vibration mount", "Eliminates dynamic lateral deflection", 1270, 560, '#3fb950')

# 7. SPECIFICATION LEGEND BLOCK (Bottom Right)
draw.rectangle([(WIDTH - 540, HEIGHT - 200), (WIDTH - 40, HEIGHT - 40)], fill='#10141d', outline='#30363d', width=2)
draw.text((WIDTH - 515, HEIGHT - 188), "CHASSIS METALLURGY SPECIFICATION:", font=font_box_title, fill='#f0f6fc')

# Yellow swatch
draw.rectangle([(WIDTH - 515, HEIGHT - 156), (WIDTH - 495, HEIGHT - 140)], fill='#d29922')
draw.text((WIDTH - 485, HEIGHT - 156), "Ultra-High-Tensile Passenger Cell (590 MPa)", font=font_box_body, fill='#c9d1d9')

# Blue swatch
draw.rectangle([(WIDTH - 515, HEIGHT - 128), (WIDTH - 495, HEIGHT - 112)], fill='#58a6ff')
draw.text((WIDTH - 485, HEIGHT - 128), "Hydroformed Front Subframe & Rails (440 MPa)", font=font_box_body, fill='#c9d1d9')

# Green swatch
draw.rectangle([(WIDTH - 515, HEIGHT - 100), (WIDTH - 495, HEIGHT - 84)], fill='#3fb950')
draw.text((WIDTH - 485, HEIGHT - 100), "Rear 5-Link Independent Carrier (400 MPa)", font=font_box_body, fill='#c9d1d9')

# Grey swatch
draw.rectangle([(WIDTH - 515, HEIGHT - 72), (WIDTH - 495, HEIGHT - 56)], fill='#6e7681')
draw.text((WIDTH - 485, HEIGHT - 72), "Melt-Sheet Floor & Acoustic Tunnel (270 MPa)", font=font_box_body, fill='#8b949e')

# Save image
output_path = r'c:\Users\Likethan KJ\Documents\project\Accord Concept\public\images\mechanical\chassis-architecture.jpg'
img.save(output_path, 'JPEG', quality=95)
print(f"Upgraded chassis blueprint saved to: {output_path}")
