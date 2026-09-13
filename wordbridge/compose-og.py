#!/usr/bin/env python3
"""Composite WordBridge lockup onto the titleless still-life at 1200×630."""

from PIL import Image, ImageDraw, ImageFont, ImageFilter

SRC = "/workspace/artifacts/imagine_images/eb0915ae-a3c9-46e9-a203-ed13c75d39a3.jpg"
OUT = "/workspace/.grok/og-composited.png"
TITLE_FONT = "/workspace/.grok/fonts/Newsreader-500.ttf"
TAG_FONT = "/workspace/.grok/fonts/SourceSans3-400.ttf"

NAVY = (23, 37, 84, 255)
INDIGO = (79, 70, 229, 255)
W, H = 1200, 630
SCALE = 2
CW, CH = W * SCALE, H * SCALE


def cover_crop(im: Image.Image, tw: int, th: int) -> Image.Image:
    sw, sh = im.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(round(sw * scale)), int(round(sh * scale))
    resized = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def text_size(font: ImageFont.FreeTypeFont, text: str) -> tuple[int, int]:
    bbox = font.getbbox(text)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]


def draw_tracked(draw: ImageDraw.ImageDraw, text: str, cx: int, y: int, font, fill, tracking: float):
    widths = [font.getlength(ch) for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x = cx - total / 2
    top = y
    for ch, ww in zip(text, widths):
        draw.text((x, top), ch, font=font, fill=fill)
        x += ww + tracking


def main() -> None:
    bg = Image.open(SRC).convert("RGB")
    canvas = cover_crop(bg, CW, CH).convert("RGBA")

    overlay = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Size title to ~58% of frame width
    target_title_w = int(CW * 0.58)
    title = "WordBridge"
    size = 200
    title_font = ImageFont.truetype(TITLE_FONT, size)
    tw, th = text_size(title_font, title)
    size = int(size * target_title_w / tw)
    title_font = ImageFont.truetype(TITLE_FONT, size)
    tw, th = text_size(title_font, title)

    tag = "Read. Understand. Remember."
    tag_font = ImageFont.truetype(TAG_FONT, 44)
    tracking = 6.0
    tag_widths = [tag_font.getlength(ch) for ch in tag]
    tag_w = sum(tag_widths) + tracking * (len(tag) - 1)
    tag_h = text_size(tag_font, tag)[1]

    rule_w, rule_h = 140, 3
    gap_title_rule = 48
    gap_rule_tag = 36
    lockup_h = th + gap_title_rule + rule_h + gap_rule_tag + tag_h
    lockup_top = (CH - lockup_h) // 2
    cx = CW // 2

    # Title (use font anchor via bbox offset)
    tb = title_font.getbbox(title)
    title_x = cx - tw // 2 - tb[0]
    title_y = lockup_top - tb[1]
    draw.text((title_x, title_y), title, font=title_font, fill=NAVY)

    rule_y = lockup_top + th + gap_title_rule
    draw.rectangle(
        [cx - rule_w // 2, rule_y, cx + rule_w // 2, rule_y + rule_h],
        fill=INDIGO,
    )

    tag_bbox = tag_font.getbbox(tag)
    tag_y = rule_y + rule_h + gap_rule_tag - tag_bbox[1]
    draw_tracked(draw, tag, cx, tag_y, tag_font, INDIGO, tracking)

    composed = Image.alpha_composite(canvas, overlay)
    # Slight unsharp after downscale keeps serifs crisp at unfurl size
    out = composed.resize((W, H), Image.Resampling.LANCZOS).convert("RGB")
    out = out.filter(ImageFilter.UnsharpMask(radius=1.0, percent=60, threshold=2))
    out.save(OUT, "PNG")
    print(f"wrote {OUT} {out.size} title_w={tw // SCALE}px ({(tw / CW) * 100:.1f}% of width)")


if __name__ == "__main__":
    main()
