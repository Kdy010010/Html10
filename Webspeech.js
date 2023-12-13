document.addEventListener('DOMContentLoaded', function() {
  // 사용자 정의 태그를 선택합니다.
  var webspeechTags = document.querySelectorAll('webspeech');

  // 각 태그에 대해 처리합니다.
  webspeechTags.forEach(function(tag) {
    // 태그의 텍스트를 가져옵니다.
    var textToSpeak = tag.textContent || tag.innerText;

    // 웹 음성 API를 사용하여 음성을 읽어줍니다.
    var speech = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(speech);
  });
});
