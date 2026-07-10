      function showPopup(message) {
         let popup = document.getElementById("customAlert");
         let overlay = document.getElementById("overlay");

         popup.innerText = message;

         // Reset display to ensure the popup is shown every time
         overlay.style.display = "block";
         popup.style.display = "block";
         setTimeout(() => {
            popup.classList.add("show");
         }, 10);

         setTimeout(() => {
            popup.classList.remove("show");
            setTimeout(() => {
               overlay.style.display = "none";
               popup.style.display = "none"; // Reset popup visibility
            }, 300);
         }, 2000);
      }

      // Disable right-click and show popup
      document.addEventListener("contextmenu", function (event) {
         event.preventDefault();
         showPopup("🚫 Right-click is disabled!");
      });

      // Disable all shortcut keys and show popup
      document.addEventListener("keydown", function (event) {
         if (
            event.ctrlKey && (event.key === "u" || event.key === "U") || // Ctrl + U (View Source)
            event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i") || // Ctrl + Shift + I (Dev Tools)
            event.ctrlKey && event.shiftKey && (event.key === "J" || event.key === "j") || // Ctrl + Shift + J (Console)
            event.ctrlKey && (event.key === "S" || event.key === "s") || // Ctrl + S (Save Page)
            event.ctrlKey && (event.key === "H" || event.key === "h") || // Ctrl + H (History)
            event.ctrlKey && (event.key === "A" || event.key === "a") || // Ctrl + A (Select All)
            event.ctrlKey && (event.key === "E" || event.key === "e") || // Ctrl + E (Search)
            event.ctrlKey && (event.key === "F" || event.key === "f") || // Ctrl + F (Find)
            event.ctrlKey && (event.key === "P" || event.key === "p") || // Ctrl + P (Print)
            event.ctrlKey && (event.key === "C" || event.key === "c") || // Ctrl + C (Copy)
            event.ctrlKey && (event.key === "X" || event.key === "x") || // Ctrl + X (Cut)
            event.ctrlKey && (event.key === "V" || event.key === "v") || // Ctrl + V (Paste)
            event.ctrlKey && (event.key === "Y" || event.key === "y") || // Ctrl + Y (Redo)
            event.ctrlKey && (event.key === "Z" || event.key === "z") || // Ctrl + Z (Undo)
            event.ctrlKey && event.shiftKey && (event.key === "C" || event.key === "c") || // Ctrl + Shift + C (Inspect)
            event.ctrlKey && event.shiftKey && (event.key === "K" || event.key === "k") || // Ctrl + Shift + K (Console in Firefox)
            event.ctrlKey && event.shiftKey && (event.key === "L" || event.key === "l") || // Ctrl + Shift + L (Lock Screen)
            event.ctrlKey && event.shiftKey && (event.key === "T" || event.key === "t") || // Ctrl + Shift + T (Reopen Closed Tab)
            event.ctrlKey && event.shiftKey && (event.key === "Delete") || // Ctrl + Shift + Delete (Clear Browsing Data)
            event.metaKey && (event.key === "S" || event.key === "s") || // Cmd + S (Mac Save)
            event.metaKey && (event.key === "P" || event.key === "p") || // Cmd + P (Mac Print)
            event.key === "F12" || // F12 (Dev Tools)
            event.key === "Escape" // Escape (To close some tools)
         ) {
            event.preventDefault();
            showPopup("⚠️ Keyboard shortcuts are disabled!");
         }
      });

      // Detect Developer Tools & Show Popup Alert
      setInterval(() => {
         let before = new Date().getTime();
         debugger;
         let after = new Date().getTime();
         if (after - before > 100) {
            showPopup("⚠️ Developer tools detected!");
            document.body.innerHTML = ""; // Clear the page
         }
      }, 2000);



