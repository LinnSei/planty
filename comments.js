document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('commentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Остановка отправки формы

        // Получение значений из формы
        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        // Создание элемента списка для нового комментария
        const li = document.createElement('li');
        li.innerHTML = `<strong>${username}:</strong> ${comment}`;

        // Добавление нового комментария в список
        document.getElementById('commentsList').appendChild(li);

        // Очистка формы
        document.getElementById('commentForm').reset();
    });
});
