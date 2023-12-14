document.addEventListener("DOMContentLoaded", function() {
    const videoList = [
        { title: "izle", url: "â.mp4", thumbnail: "indir.jpeg", category: "category1" },
        { title: "izleme", url: "izleme", thumbnail: "Ekran görüntüsü 2023-12-01 004420.jpg", category: "category2" },
        { title: "boşver", url: "boşver", thumbnail: "images.jpeg", category: "category1" }
        // Dilediğiniz kadar video ekleyebilirsiniz
    ];

    const videosContainer = document.getElementById("videos");
    const searchInput = document.getElementById("searchInput");
    const categorySelect = document.getElementById("categorySelect");

    renderVideos(videoList);

    // Arama ve kategori seçimi değişikliklerine göre video listesini güncelle
    searchInput.addEventListener("input", updateVideoList);
    categorySelect.addEventListener("change", updateVideoList);

    function renderVideos(videoList) {
        videosContainer.innerHTML = "";

        videoList.forEach(video => {
            const thumbnailElement = document.createElement("img");
            thumbnailElement.src = video.thumbnail;
            thumbnailElement.alt = video.title;

            const titleElement = document.createElement("h2");
            titleElement.textContent = video.title;

            const videoWrapper = document.createElement("div");
            videoWrapper.classList.add("video-wrapper");
            videoWrapper.appendChild(thumbnailElement);
            videoWrapper.appendChild(titleElement);

            // Video resmine tıklandığında yeni sayfaya yönlendirilir.
            videoWrapper.addEventListener("click", function() {
                redirectToVideoPage(video.url);
            });

            videosContainer.appendChild(videoWrapper);
        });
    }

    function updateVideoList() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;

        const filteredVideos = videoList.filter(video => {
            const titleMatch = video.title.toLowerCase().includes(searchTerm);
            const categoryMatch = selectedCategory === "all" || video.category === selectedCategory;

            return titleMatch && categoryMatch;
        });

        renderVideos(filteredVideos);
    }

    function redirectToVideoPage(videoUrl) {
        // Yeni bir sayfaya yönlendirme işlemini gerçekleştirir.
        window.location.href = 'video.html?src=' + encodeURIComponent(videoUrl);
    }
});














function redirectToVideo(videoSrc, videoTitle, videoDescription) {
    const url = `video.html?src=${encodeURIComponent(videoSrc)}&title=${encodeURIComponent(videoTitle)}&description=${encodeURIComponent(videoDescription)}`;
    window.location.href = url;
}
