var index =0;
    function changeImage() {
        var imgs = ['img2-1.jpg', 'img2-2.jpg', 'img2-3.jpg', 'img2-4.jpg'];
        document.getElementById('change-Image').src = imgs[index];
        index++;
        if (index == 4) {
            index =0;
        }
    }
    //---Tạo chuyển ảnh khi tự động
    var index =0;
    changeImage = function() {
        var imgs = ['img2-1.jpg', 'img2-2.jpg', 'img2-3.jpg', 'img2-4.jpg'];
        document.getElementById('change-Image').src = imgs[index];
        index++;
        if (index == 4) {
            index =0;
        }
    }
    setInterval(changeImage, 1500);