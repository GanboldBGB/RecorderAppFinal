function loadLesson(lessonType, element) {
    const mainContainer = document.getElementById('main-container');
    
    // 1. Цэсний идэвхтэй харагдах байдлыг солих
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }

    // 2. Сонгосон хичээлээс хамаарч агуулгыг солих
    if (lessonType === 'posture') {
        // AI камерын хуудсыг ачаалах
        mainContainer.innerHTML = `
            <div style="height: calc(100vh - 80px); width: 100%; border-radius: 16px; overflow: hidden; border: 1px solid #252840; background: #000;">
                <iframe src="/posture_coach.html" 
                        style="width: 100%; height: 100%; border: none;"
                        allow="camera; microphone;">
                </iframe>
            </div>`;
    } 
    else if (lessonType === 'breathing' || lessonType === 'songs') {
        // Амьсгалын техник болон Энгийн аянууд дээр дарахад таны анимейшн хуудсыг дуудна
        mainContainer.innerHTML = `
            <div style="height: calc(100vh - 80px); width: 100%; border-radius: 16px; overflow: hidden; border: 1px solid #252840; background: #1a1a2e;">
                <iframe src="/breathing_lesson.html" 
                        style="width: 100%; height: 100%; border: none;">
                </iframe>
            </div>`;
    }
    else {
        // Бусад хичээлүүдийн стандарт загвар
        let lessonTitle = "";
        switch(lessonType) {
            case 'notes': lessonTitle = "Нот сурах"; break;
            case 'fingering': lessonTitle = "Хурууны байрлал"; break;
            case 'sound': lessonTitle = "Дуу авианы хяналт"; break;
            default: lessonTitle = "Хичээл";
        }

        mainContainer.innerHTML = `
            <div class="content-card" style="padding: 40px; text-align: center;">
                <h1 style="color: #fff; font-size: 2.5rem;">${lessonTitle}</h1>
                <p style="color: #9298b8; margin-top: 20px; font-size: 1.1rem;">Энэхүү хичээлийн агуулга удахгүй орох болно.</p>
                <div style="margin-top: 40px; opacity: 0.2;">
                    <i class="fas fa-book-open" style="font-size: 100px; color: #4a90d9;"></i>
                </div>
            </div>`;
    }
}