
# 🕰️ Simple Alarm Clock

## Description
This is a simple web-based **Alarm Clock** built using **HTML**, **CSS** (design inspired by a CodePen digital clock), and **JavaScript** for logic and functionality.

It allows users to:
- View a real-time digital clock.
- Set alarms, which are stored using **Local Storage** for persistence across page reloads.
- Trigger a **default sound** when the alarm time is reached.

No backend — 100% front-end and browser-powered!

---

## Features
- ⏰ **Real-time digital clock** (hours, minutes, seconds).
- 🔔 **Add alarms** with time and AM/PM selection.
- 📦 **LocalStorage support** to save alarms.
- 🎵 **Default alarm sound** plays when the time matches.
- ❌ **Remove alarms** after they are triggered automatically.

---

## Technologies Used
- **HTML5** - Markup for structure
- **CSS3** - Styling the clock and alarm list
- **JavaScript (Vanilla)** - Logic for time handling, alarm matching, and sound playing
- **Local Storage** - Saving alarms persistently (Learned newly)

---

## How It Works
- The clock updates every second (`setInterval`).
- When the current time matches any saved alarm:
  - The alarm is triggered (plays sound).
  - That alarm is automatically deleted.
- The alarm sound plays (browser allows it even without any user interaction).

---

## Setup
1. Open the project in a web browser.
2. Set an alarm by choosing the time.
3. Wait for the alarm time — the sound will ring automatically!

---

## Future Plans 🚀
- ✅ Add **status toggle** (ON/OFF) for each alarm.
- ✅ Add **repeat options** (daily, weekdays, weekends, custom days).
- ✅ Support for **multiple and custom alarm sounds**.
- ✅ Allow selecting **system sounds** (if browser and OS permissions allow).
- ✅ Improve UI with better animations and mobile support.

---

## Screenshots
<img width="1512" alt="Screenshot 2025-04-28 at 11 23 41 PM" src="https://github.com/user-attachments/assets/0e983c2e-f7c7-45ab-8561-b260b13e2ca0" />
<img width="1512" alt="Screenshot 2025-04-28 at 11 23 33 PM" src="https://github.com/user-attachments/assets/600b3d3a-213e-4278-8eb2-2b49cbfad5a0" />


---

## License
This project is open-source. Feel free to use and modify it!
