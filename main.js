$(document).ready( function () {
    $(".next").on("click", function () {
        let TopImg = $(".active")
        let underImg = TopImg.next()

        let numbering = $(this).data("count") || 0
        $(this).data("count", ++numbering)
        console.log(numbering);
        
        if (underImg.length) {
            TopImg.removeClass("active").css("z-index", -10)
            underImg.addClass("active").css("z-index", 10)
        }

        if (numbering>3) {
            location.reload()
        }
    })
})