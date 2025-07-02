// Show only the music popup on page load
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('musicPopup').classList.add('active');
  }, 80);
});

function showFirstMainPopup() {
  document.getElementById('musicPopup').classList.remove('active');
  setTimeout(function() {
    document.getElementById('musicPopup').style.display = 'none';
    document.getElementById('popup').style.display = '';
    setTimeout(function() {
      document.getElementById('popup').classList.add('active');
    }, 30);
  }, 450);
}

document.getElementById('musicYesBtn').onclick = function() {
  var audio = document.getElementById('bgMusic');
  audio.muted = false;
  audio.play();
  showFirstMainPopup();
};
document.getElementById('musicNoBtn').onclick = function() {
  var audio = document.getElementById('bgMusic');
  audio.muted = true;
  showFirstMainPopup();
};

// Hide all popups
function hideAllPopups() {
  document.getElementById('popup').classList.remove('active');
  document.getElementById('popup2').classList.remove('active');
  document.getElementById('popup3').classList.remove('active');
  setTimeout(function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup2').style.display = 'none';
    document.getElementById('popup3').style.display = 'none';
  }, 500);
}
// Show third popup on any Yes
function showPopup3() {
  document.getElementById('popup').classList.remove('active');
  document.getElementById('popup2').classList.remove('active');
  setTimeout(function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup2').style.display = 'none';
    document.getElementById('popup3').style.display = '';
    setTimeout(function() {
      document.getElementById('popup3').classList.add('active');
    }, 30);
  }, 450);
}
document.getElementById('yesBtn').onclick = showPopup3;
document.getElementById('yesBtn2').onclick = showPopup3;

const urduLines = [
  '✨پیاری حبیبہ کے نام✨',
  'کہتے ہیں کچھ لوگ زندگی میں ایسے آتے ہیں',
  'جیسے موسم بہار جو ہر چیز کو خوبصورت بنا دیتے ہیں',
  'تم بھی ویسی ہی ہو، خاموشی سے خوشیاں بانٹنے والی',
  'تمہاری مسکراہٹ کسی شگوفے کی طرح کھلتی ہے',
  'اور تمہاری باتیں جیسے کسی ناول کی خوبصورت سطریں',
  'اللہ کرے تمہاری زندگی بھی کسی حسین کہانی کی طرح ہو',
  'جس کا ہر صفحہ خوشیوں سے بھرا ہو',
  'اور ہر موڑ پر تمہیں وہ ملے',
  'جو تمہارے دل کو سکون دے',
  'آمین',
  'تم ہمیشہ خوش رہو، ویسی ہی رہو',
  '،جیسے تم ہو — خاص، نرالی',
  'اور میری سب سے پسندیدہ شخس',
  'ویسے تو میں نہ سالار سکندر ہوں',
  'نہ عمر جہانگیر',
  'اور نہ ہی وجدان مصطفیٰ',
  'میں تو صرف عاطف ظفر ہوں',
  'جو تم سے بہت پیار کرتا ہے',
  'بہت فکر کرتا ہے تمہاری',
  'میں بس یہی چاہتا ہوں تمہارا ہاتھ ایسے ہی پکڑے رہو',
  'ہر خوشی میں بھی اور ہر پریشانی میں بھی ',
  'اور جیسا کہ میں ہمیشہ کہتا ہوں',
  'تم کبھی پریشان مت ہونا',
  'عاطف ہمیشہ تمہارے ساتھ ہے',
  'اور ہمیشہ تمہارے ساتھ رہے گا انشاء اللہ',
  'تو وکیل صاحبہ',
  'سالگرہ بہت بہت مبارک ہو، 🎂✨',
  'تمہارا دوست، عاطف ظفر',
  '🫂💗',
  'so now ek aur intezam hai',
  'I hope you like it',
];

function showUrduPopup() {
  hideAllPopups();
  setTimeout(function() {
    const overlay = document.getElementById('urduPopup');
    const container = document.getElementById('urduPopupContainer');
    container.innerHTML = '';
    overlay.style.display = '';
    setTimeout(function() {
      overlay.classList.add('active');
      let i = 0;
      function showLine(idx) {
        container.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'urdu-line urdu-line-bottom-in';
        div.textContent = urduLines[idx];
        container.appendChild(div);
        setTimeout(() => {
          div.classList.add('urdu-line-up-out');
          div.classList.remove('urdu-line-bottom-in');
        }, 3200);
        setTimeout(() => {
          if (idx + 1 < urduLines.length) {
            showLine(idx + 1);
          } else {
            // Show two buttons: Read Again and Surprise me!
            container.innerHTML = '';
            const btnRow = document.createElement('div');
            btnRow.className = 'urdu-final-btn-row';
            const readBtn = document.createElement('button');
            readBtn.className = 'urdu-final-btn';
            readBtn.textContent = 'Read Again';
            readBtn.onclick = function() {
              showUrduPopup();
            };
            const surpriseBtn = document.createElement('button');
            surpriseBtn.className = 'urdu-final-btn';
            surpriseBtn.textContent = 'Surprise me';
            surpriseBtn.onclick = function() {
              overlay.classList.remove('active');
              setTimeout(() => { overlay.style.display = 'none'; }, 500);
              showVideoPopup();
            };
            btnRow.appendChild(readBtn);
            btnRow.appendChild(surpriseBtn);
            container.appendChild(btnRow);
          }
        }, 4000);
      }
      showLine(0);
    }, 30);
  }, 500);
}

function showVideoPopup() {
  const vOverlay = document.getElementById('videoPopup');
  const video = document.getElementById('surpriseVideo');
  const bgMusic = document.getElementById('bgMusic');
  vOverlay.style.display = '';
  setTimeout(() => {
    vOverlay.classList.add('active');
    if (bgMusic) bgMusic.muted = true;
    video.currentTime = 0;
    video.muted = false;
    video.play();
  }, 30);
}
document.getElementById('videoCloseBtn').onclick = function() {
  const vOverlay = document.getElementById('videoPopup');
  const video = document.getElementById('surpriseVideo');
  const bgMusic = document.getElementById('bgMusic');
  vOverlay.classList.remove('active');
  setTimeout(() => { vOverlay.style.display = 'none'; }, 500);
  video.pause();
  if (bgMusic) bgMusic.muted = false;
};

document.getElementById('nextBtn').onclick = showUrduPopup;

// Show second popup on No
document.getElementById('noBtn').onclick = function() {
  document.getElementById('popup').classList.remove('active');
  setTimeout(function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup2').style.display = '';
    setTimeout(function() {
      document.getElementById('popup2').classList.add('active');
    }, 30);
  }, 450);
}; 