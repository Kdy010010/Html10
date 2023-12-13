  // JavaScript 코드로 커스텀 태그를 구현
    class PlayVideoTime extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const videoSrc = this.getAttribute('src');
            const startTime = parseInt(this.getAttribute('time')) || 0;

            // 비디오 엘리먼트 생성
            const videoElement = document.createElement('video');
            videoElement.src = videoSrc;

            // 시작 시간 설정
            videoElement.addEventListener('loadedmetadata', () => {
                videoElement.currentTime = startTime;
            });

            // 페이지에 추가
            this.appendChild(videoElement);
        }
    }

    // 커스텀 엘리먼트 등록
    customElements.define('playvideotime', PlayVideoTime);
