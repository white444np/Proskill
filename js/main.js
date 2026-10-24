(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate WOW.js
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    });

    // Facts Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Project Carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: { items: 2 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        }
    });

    // Testimonials Carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 }
        }
    });

    // // Meeting Pop-up Modal
    // document.addEventListener("DOMContentLoaded", function () {
    //     const modal = document.getElementById("meetingModal");
    //     const btn = document.getElementById("scheduleBtn");
    //     const closeBtn = document.querySelector(".close-btn");
    //     const form = document.getElementById("meetingForm");

    //     // Open Modal
    //     btn.onclick = function () {
    //         modal.style.display = "flex";
    //     };

    //     // Close Modal
    //     closeBtn.onclick = function () {
    //         modal.style.display = "none";
    //     };

    //     window.onclick = function (event) {
    //         if (event.target === modal) {
    //             modal.style.display = "none";
    //         }
    //     };

    //     // Form Validation & Submission
    //     form.addEventListener("submit", async function (event) {
    //         event.preventDefault(); // Prevent page refresh

    //         // Get Input Values
    //         const name = document.getElementById("name").value.trim();
    //         const email = document.getElementById("email").value.trim();
    //         const mobile = document.getElementById("mobile").value.trim();
    //         const reason = document.getElementById("reason").value.trim();
    //         const date = document.getElementById("date").value.trim();

    //         // Error Message Elements
    //         const nameError = document.getElementById("nameError");
    //         const emailError = document.getElementById("emailError");
    //         const mobileError = document.getElementById("mobileError");
    //         const reasonError = document.getElementById("reasonError");
    //         const dateError = document.getElementById("dateError");

    //         // Reset Error Messages
    //         nameError.style.display = "none";
    //         emailError.style.display = "none";
    //         mobileError.style.display = "none";
    //         reasonError.style.display = "none";
    //         dateError.style.display = "none";

    //         let valid = true;

    //         // Name Validation
    //         if (!/^[A-Za-z\s]{3,}$/.test(name)) {
    //             nameError.style.display = "block";
    //             valid = false;
    //         }

    //         // Reason Validation
    //         if (reason.length < 10) {
    //             reasonError.style.display = "block";
    //             valid = false;
    //         }

    //         // Email Validation
    //         if (!/\S+@\S+\.\S+/.test(email)) {
    //             emailError.style.display = "block";
    //             valid = false;
    //         }

    //         // Mobile Validation
    //         if (!/^\d{10}$/.test(mobile)) {
    //             mobileError.style.display = "block";
    //             valid = false;
    //         }

    //         // Date Validation
    //         if (!date) {
    //             dateError.style.display = "block";
    //             valid = false;
    //         }

    //         if (!valid) return;

    //         // Schedule Meeting
    //         const eventData = {
    //             name,
    //             email,
    //             reason,
    //             date,
    //             summary: `Meeting with ${name}`,
    //             description: reason
    //         };

    //         try {
    //             const response = await fetch("https://script.google.com/macros/s/AKfycbxku2nicvggA43VZV_aULrBKBHcPKIyRFeB-1qlXkPKRvuhX9sTgDbBwi6_bR55F2jcIQ/exec", {
    //                 method: "POST",
    //                 mode: "no-cors",  // Avoids CORS issues
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify(eventData)
    //             });
                
    //             console.log(response); // Debugging: Check if response is successful
                
    //             if (!response.ok) {
    //                 throw new Error("Failed to schedule meeting.");
    //             }

    //                 // Show success message
    // alert("Meeting successfully scheduled!");
                
    //             modal.style.display = "none";
    //             form.reset();
    //         } catch (error) {
    //             alert("Error scheduling meeting. Please try again.");
    //             console.error(error);
    //         }
    //     });
    // });
})(jQuery);