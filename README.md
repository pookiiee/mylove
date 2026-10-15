# ANEA'S LITTLE UNIVERSE ♡
### A Personalized Interactive Birthday Experience for Anea, Created by Aseel

A complete, beautiful, playable, and heartfelt celestial web experience crafted especially for Anea's 24th birthday (October 17).

Ready for direct local double-click and **1-click GitHub Pages deployment**.

---

## 🚀 طريقة الرفع على GitHub ونشر الموقع (GitHub Pages)

يمكنك رفع هذا المشروع على GitHub وجعله متاحاً أونلاين على رابط دائم لترسليه لأنيتا بكل سهولة:

### الخطوات (بالعربي):
1. افتحي حسابك على [GitHub](https://github.com) وأنشئي مستودعاً جديداً (**New Repository**)، وسمّيه مثلاً: `aneas-little-universe`.
2. ارفعي جميع ملفات هذا المجلد (بما فيها `index.html`، مجلد `css`، ومجلد `js`، وملف `.nojekyll`) إلى المستودع.
3. ادخلي على إعدادات المستودع **Settings** من القائمة العلوية.
4. من القائمة الجانبية اليسرى اختاري **Pages**.
5. تحت قسم **Build and deployment**:
   - تأكدي أن Source هو: **Deploy from a branch**.
   - اختاري الفرع **`main`** (أو `master`) والمجلد **`/(root)`**.
   - اضغطي زر **Save**.
6. انتظري دقيقة واحدة، وسيظهر لك رابط الموقع المباشر في أعلى الصفحة مثل:
   `https://<your-username>.github.io/aneas-little-universe/`
7. مبروك! الموقع الآن جاهز لفتح الرابط على الجوال والكمبيوتر ومشاركته مع أنيتا عند منتصف الليل ✨

---

## 💻 طريقة الفتح والتشغيل المحلي (بدون إنترنت)

- **الطريقة الأسهل:** اضغطي نقرتين مزدوجتين (Double Click) على ملف `index.html` وسيفتح مباشرة داخل أي متصفح (Edge, Chrome, Safari, Firefox) دون الحاجة لأي برامج.
- **أو باستخدام ملف التشغيل:** اضغطي مرتين على `start.bat` لفتح خادم محلي تلقائياً على `http://localhost:8080`.

---

## 🌟 Overview & Concept

The entire project is built around the idea that **Aseel has secretly created a little universe for Anea**. Every destination, memory, and surprise celebrates their real relationship story:
- How they met on **March 31**, when Anea was an administrator on Aseel's server.
- The early days of Anea reaching out in private messages, while Aseel initially acted distant.
- Aseel gradually falling for Anea and loving her warmth and attention.
- The unforgettable **voice call** where Anea playfully encouraged Aseel to confess her feelings.
- Their shared affectionate pet names: **"حبوبي"** and **"حبوبي حبوبي"**.
- Aseel's personal song dedication: **"love." by wave to earth**.
- The milestone of Anea turning **24 years old**.

---

## 🪐 The 6 Destinations

1. **Our Little Home (بيتنا الصغير)**  
   A cozy celestial room with an arched starlit window, two warm mugs, a bedside note, a gentle lamp, and the secret word *"حبوبي"*.

2. **The Garden of Memories (حديقة الذكريات)**  
   A floating garden with 6 glowing plants telling their core story:
   - *Memory 01: The First Message* (Server admin & early DMs)
   - *Memory 02: Slowly Falling* (Two orbiting stars)
   - *Memory 03: Our Little Routine* (Talking and playing together)
   - *Memory 04: March 31* (Golden milestone flower)
   - *Memory 05: The Voice Call* (Interactive soundwave animation & heartfelt confession)
   - *Memory 06: The Way You Love Me* (Anea's tenderness, attentiveness, and pampering)

3. **The Mailbox of Love (صندوق رسائل الحب)**  
   A floating celestial mailbox containing 6 wax-sealed letters written in natural, intimate Arabic with elegant English headings:
   - *"For the Girl Who Kept Messaging Me"*
   - *"The Night You Made Me Confess"*
   - *"Things I Love About You"*
   - *"For When You Miss Me"*
   - *"For When You Need a Little Extra Love"*
   - *"A Letter for Your 24th Birthday"*

4. **The Little Carnival (كرنفال النجوم)**  
   Three adorable, stress-free playable mini-games:
   - **Game 1: Collect the Stars** (Catch falling stars to reveal love quotes)
   - **Game 2: Find Our Constellation** (Connect stars in sequence to trace Anea & Aseel's constellation)
   - **Game 3: The Little Love Quiz** (5 affectionate questions about their story with gentle responses)

5. **The Lake of Stars (بحيرة النجوم)**  
   The calmest sanctuary with water ripple reflections, 5 floating starlight lanterns holding private thoughts, and a *"Sit Beside Me Beneath the Stars"* interaction.

6. **The Birthday Castle (قصر الـ 24 عاماً)**  
   A grand starlight hall that unlocks through exploration, featuring a glowing 24th birthday cake with candle flames and leading to the **Final Surprise**.

---

## 🎁 The Final Surprise & Climax

- **Interactive Gift Box with 3 Options:**
  1. *A Letter From Aseel* (Intimate Arabic love letter)
  2. *Our Little Video* (Embedded video player with custom video support)
  3. *Our Little Song* (Dedication card for "love." by wave to earth with listening links)
- **The Final Letter Reveal:**  
  *"For My Favorite Person in This Universe"*  
  Concluding with: *"Happy 24th Birthday, my Anity. I love you, حبوبي. ♡"*
- **The Emotional Climax:**  
  Clicking *"Stay Here With Me A Little Longer"* dims the universe and lights up the constellation **Aseel ♡ Anea** in the sky with the line:  
  *"In every little universe, I'd still find my way to you."*

---

## ✏️ How Aseel Can Personalize the Content

All relationship details, memories, letters, quiz questions, and media are centralized in:
```
js/config.js
```

If you edit `js/config.js`, simply run:
```bash
python build_bundle.py
```
This updates `js/bundle.js` with your new text automatically.

### 1. Adding Personal Photos
1. Place your photo files into `assets/images/` (e.g. `assets/images/photo1.jpg`).
2. Open `js/config.js` and add your image path and captions under `photos: [...]`.

### 2. Adding a Personal Video
1. Place your MP4 video into `assets/video/` (e.g., `assets/video/birthday_video.mp4`).
2. In `js/config.js`, update:
   ```javascript
   video: {
     src: "assets/video/birthday_video.mp4",
     ...
   }
   ```
   *(If left empty, a beautiful starlight placeholder card will be displayed automatically).*

### 3. Resetting the Game Progress for Testing
Click the **☰ (Menu)** icon at the top right of the universe map and select **"Restart Experience"** to reset all discovered stars and replay from the opening screen.

---

## 🔒 Privacy

This project runs 100% locally in the browser. It contains no tracking scripts, no external analytics, and sends no personal letters or media to any third-party server.
