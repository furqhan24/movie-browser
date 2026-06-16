  const modal = document.getElementById("loginModal");
  const navbar = document.getElementById("navbar");
  const content = document.getElementById("content");
  const themeIcon = document.getElementById("themeIcon");
  const themeIconNav = document.getElementById("themeIconNav");

  const movieData = {
    home: [
      { title: "The Avengers", year: "2012", rating: "8.0", image: "https://images.ottplay.com/posters/The_Avengers_2012_movie_poster_1.jpg" },
      { title: "Iron Man 3", year: "2013", rating: "7.1", image: "https://www.themoviedb.org/t/p/original/3OkXrXYsXELnqCqGhgYHvDXTc3v.jpg" },
      { title: "Chhaava",year: "2025", rating: "7.3",image: "https://filmfare.wwmindia.com/photogallery/2025/jan/vickykaushal21737363011.jpg"},
      { title: "Animal",year: "2023", rating: "6.1",image: "https://www.masala.com/wp-content/uploads/cloud/2023/09/22/image-17.png"},
      { title: "Dhoom 3", year: "2013", rating: "5.4", image: "https://tse1.mm.bing.net/th/id/OIP._ofmAjJ1gswTPISZ0XHb0AHaLH?pid=Api&P=0&h=180" },
      { title: "Dilwale Dulhania Le Jayenge", year: "1995", rating: "8.1", image: "https://static.digit.in/OTT/images/dilwale-dulhania-le-jayenge-5f2fe0a7058c2888ecbafdec.jpg?tr=w-600" },
      { title: "Kantara",year: "2022", rating: "9.4",image: "https://tse1.mm.bing.net/th/id/OIP.j3PuOAoE8-Ug3-pRUaExlQHaJ0?pid=Api&P=0&h=180"},
      { title: "Oppenheimer",year: "2023", rating: "8.3",image: "https://tse2.mm.bing.net/th/id/OIP.odAOX-sNgcQ22lZJAm1digHaLu?pid=Api&P=0&h=180"},
      { title: "Batman",year: "2022", rating: "7.8",image: "https://tse2.mm.bing.net/th/id/OIP.Q6ygvpGKl7fsu2wy0MNIvgHaKd?pid=Api&P=0&h=180"},
      { title: "Dune: Part Two",year: "2024", rating: "8.5",image: "https://tse1.mm.bing.net/th/id/OIP.VfwJxzZefEVRb57kzd1N-QHaLH?pid=Api&P=0&h=180"}
    ],
    shows: [
      { title: "Big Boss", year: "2023", rating: "7.8", image: "https://image.tmdb.org/t/p/original/sYrQoN38sJ2LqMN698Nwljh4Hbe.jpg" },
      { title: "Indian Idol", year: "2020", rating: "7.5", image: "https://www.themoviedb.org/t/p/original/q4ZDMJCpm2ZSEWW23rkN6QQPdx8.jpg" },
      { title: "Koffee with Karan", year: "2022", rating: "8.0", image: "https://img.rgstatic.com/content/show/7cd6eca9-1782-445a-9ab4-1d7f4f9853a3/poster-500.jpg" },
      { title: "Sa Re Ga Ma Pa",year: "2024", rating: "6.2",image: "https://image.tmdb.org/t/p/original/3n5rsWo5RIVqB9NwNjMiC6FNqCG.jpg" },
      { title: "The Kapil Sharma Show", year: "2023", rating: "7.0", image: "https://tse3.mm.bing.net/th/id/OIP.UsrNF7Apn8mAUS_6pRe3kgHaKo?pid=Api&P=0&h=180" },
      { title: "MasterChef India", year: "2023", rating: "7.9", image: "https://tse2.mm.bing.net/th/id/OIP.8mngERGHY7YQqfMlSG93GgHaK-?pid=Api&P=0&h=180" },
      { title: "Dance India Dance", year: "2023", rating: "7.4", image: "https://static.digit.in/OTT/v2/images/tr:w-1200/dance-india-dance-battle-of-the-champions-144839.jpg" },
      { title: "Roadies", year: "2023", rating: "6.5", image: "https://img6.bdbphotos.com/images/orig/x/y/xyadrnhhtc65rdhx.jpg?skj2io4l" },
      { title: "Splitsvilla", year: "2023", rating: "6.8", image: "https://images.justwatch.com/poster/314525238/s718/season-15.jpg" },
      { title: "Khatron Ke Khiladi", year: "2021", rating: "5.7", image: "https://images.justwatch.com/poster/249824420/s718/khatron-ke-khiladi.%7Bformat%7D" }
    ],
    horror: [
      { title: "The Conjuring", year: "2021", rating: "7.5", image: "https://image.tmdb.org/t/p/original/28lLO7xwhZyztc27ASMXdaoy2mI.jpg" },
      { title: "Annabelle", year: "2019", rating: "6.8", image: "https://tse1.mm.bing.net/th/id/OIP.XDzrEhp-5mDV5-VQCw6ZWwHaKk?pid=Api&P=0&h=180" },
      { title: "Hereditary",year: "2018", rating: "7.3",image: "https://image.tmdb.org/t/p/original/4GFPuL14eXi66V96xBWY73Y9PfR.jpg"},
      { title: "Insidious",year: "2010", rating: "6.8",image: "https://images.ottplay.com/posters/Insidious_The_Red_Door_2023_movie_poster_1_495.jpeg?impolicy=ottplay-20210210&width=160"},
      { title: "Tumbbad",year: "2018", rating: "8.2",image: "https://tse3.mm.bing.net/th/id/OIP.wUNEt2w6Ey6UEdSp1Nf_mgHaKk?pid=Api&P=0&h=180"},
      { title: "The Nun",year: "2018", rating: "5.3",image: "https://tse2.mm.bing.net/th/id/OIP.MWEwdV3UoR5y4KXu7-uCtAHaKe?pid=Api&P=0&h=180"},
      { title: "A Quiet Place",year: "2018", rating: "7.5",image: "https://tse2.mm.bing.net/th/id/OIP.dhzhmoXUvKHCULPBMwn4PwHaLG?pid=Api&P=0&h=180"},
      { title: "The Babadook",year: "2014", rating: "6.8",image: "https://tse4.mm.bing.net/th/id/OIP.qotMoMfm0WvmHtpAaLAEJwHaLC?pid=Api&P=0&h=180"},
      { title: "It",year: "2017", rating: "7.3",image: "https://images-na.ssl-images-amazon.com/images/I/91XQ4feYRpL._AC_SL1500_.jpg"},
      { title: "The Shining",year: "1980", rating: "8.4",image: "https://tse1.mm.bing.net/th/id/OIP.0D3iQWuoQbS0G_zAUYfG0wHaLH?pid=Api&P=0&h=180"}
    ],
    mythological: [
      { title: "Bahubali 2", year: "2017", rating: "8.2", image: "https://st1.bollywoodlife.com/wp-content/uploads/2015/05/cfca_pswmaaf7ux.jpg" },
      { title: "Adipurush", year: "2023", rating: "5.5", image: "https://boxofficeworldwide.com/wp-content/uploads/2023/05/Adipurush-With-One-Month-For-Release-Team-Unveils-New-Poster-For-This-Prabhas-Kriti-Sanon-Saif-Ali-Khan-Starrer.jpeg" },
      { title: "Clash of the Titans",year: "2010", rating: "5.8",image: "https://tse4.mm.bing.net/th/id/OIP.q3aN23flaRufKO5JhEDXogHaLH?pid=Api&P=0&h=180"},
      { title: "Gods of Egypt",year: "2016", rating: "5.4",image: "https://tse2.mm.bing.net/th/id/OIP.OV4ifvHvwEQvbnuDYFFKtQHaKj?pid=Api&P=0&h=180"},
      { title: "Troy",year: "2004", rating: "7.2",image: "https://tse3.mm.bing.net/th/id/OIP.bUjDspmomSxti0ro-QvvVAHaLH?pid=Api&P=0&h=180"},
      { title: "300",year: "2006", rating: "7.6",image: "https://tse3.mm.bing.net/th/id/OIP.DhfDUDpx7pwqIVGQ8ZL9HQHaLH?pid=Api&P=0&h=180"},
      { title: "Immortals",year: "2011", rating: "6.0",image: "https://tse2.mm.bing.net/th/id/OIP.SO1GTM06t5IEJ3xNOp5Q9AHaLH?pid=Api&P=0&h=180"},
      { title: "The Mummy",year: "1999", rating: "7.0",image: "https://tse3.mm.bing.net/th/id/OIP.M7woEHHTVY3h_dD0NcNP3gHaLH?pid=Api&P=0&h=180"},
      { title: "The Odyssey",year: "1997", rating: "7.0",image: "https://tse2.mm.bing.net/th/id/OIP.-iDGOnsuH0UfU3LKIGAxrgHaK-?pid=Api&P=0&h=180"},
      { title: "The Ten Commandments",year: "1956", rating: "8.0",image: "https://tse1.mm.bing.net/th/id/OIP.eOxMhSFtoQQhdDKJ4EJ1zgHaLR?pid=Api&P=0&h=180"},
      { title: "Baahubali: The Beginning",year: "2015", rating: "8.0",image: "https://c8.alamy.com/comp/2JE359T/prabhas-poster-baahubali-the-beginning-2015-2JE359T.jpg"},
      { title: "Ramayana: The Legend of Prince Rama",year: "1992", rating: "7.5",image: "https://tse3.mm.bing.net/th/id/OIP.uaK80QQLbmHajQLfrG5rlAHaLH?pid=Api&P=0&h=180"}
    ],
    comedy: [
      { title: "Housefull 4", year: "2019", rating: "6.0", image: "https://m.media-amazon.com/images/M/MV5BMDlkMmRkM2QtYmZiMi00NWYzLThmMjEtN2IwMTNhMDFkODA0XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg" },
      { title: "Hera Pheri", year: "2000", rating: "8.1", image: "https://www.themoviedb.org/t/p/original/hOQ3fIfJEAdBjHj5TDn60H9nAkx.jpg" },
      { title: "Humble Politiciann Nograj",year: "2018", rating: "7.6",image: "https://tse4.mm.bing.net/th/id/OIP.7kuHUbU9A66RwRh6J-nlJQHaK-?pid=Api&P=0&h=180"},
      { title: "Crazy Rich Asians",year: "2018", rating: "6.9",image: "https://tse2.mm.bing.net/th/id/OIP.aA8VmWu-toexnX6EjTTB8wHaLH?pid=Api&P=0&h=180"},
      { title: "The Hangover",year: "2009", rating: "7.7",image: "https://tse2.mm.bing.net/th/id/OIP.Rt7dy6EVY4xT6wngC0jFLwHaLH?pid=Api&P=0&h=180"},
      { title: "Superbad",year: "2007", rating: "7.6",image: "https://tse1.mm.bing.net/th/id/OIP.rLDEbjjsQ-pNQJIue74gLwHaJj?pid=Api&P=0&h=180"},
      { title: "Dumb and Dumber",year: "1994", rating: "7.3",image: "https://m.media-amazon.com/images/I/71GsnAh8OEL.jpg"},
      { title: "Anchorman",year: "2004", rating: "7.2",image: "https://upload.wikimedia.org/wikipedia/en/6/64/Movie_poster_Anchorman_The_Legend_of_Ron_Burgundy.jpg"},
      { title: "The Grand Budapest Hotel",year: "2014", rating: "8.1",image: "https://tse2.mm.bing.net/th/id/OIP.gGpJghm8Mk2tHBbN1ptMXQHaLC?pid=Api&P=0&h=180"},
      { title: "Step Brothers",year: "2008", rating: "6.9",image: "https://preview.redd.it/step-brothers-is-now-streaming-on-hbo-max-v0-5dyqoacrr8xa1.jpg?auto=webp&s=ea1c6d925c7fd1dad8defe667b62a0692e39fe22"},
      { title: "3 Idiots",year: "2009", rating: "8.4",image: "https://tse3.mm.bing.net/th/id/OIP.OXZl-nuFXbDKbxsquj5gqAHaLH?pid=Api&P=0&h=180"},
      { title: "Zindagi Na Milegi Dobara",year: "2011", rating: "8.1",image: "https://tse1.mm.bing.net/th/id/OIP.er-wuSYRvdCx-qAsGsaFSwHaKt?pid=Api&P=0&h=180"},
      { title: "PK",year: "2014", rating: "8.1",image: "https://tse3.mm.bing.net/th/id/OIP.l8Fw0FCYtZW17EZhCzoC6gHaKa?pid=Api&P=0&h=180"}
    ]
  };

  function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    if (username.length < 4) {
      alert("Username must be at least 4 characters long");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if (/\s/.test(username)) {
      alert("Username cannot contain spaces");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");

    modal.style.display = "none";
    navbar.style.display = "flex";
    content.style.display = "block";
    showContent("home");
  }

  function logout() {
    localStorage.clear();
    location.reload();
  }

  function showContent(section) {
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('onclick') === `showContent('${section}')`) {
        link.classList.add('active-link');
      }
    });

    let html = `<h1>${section.charAt(0).toUpperCase() + section.slice(1)} Section</h1>`;
    html += `<div class="movie-grid">`;

    if (movieData[section]) {
      movieData[section].forEach(movie => {
        html += `
          <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}" />
            <div class="movie-info">
              <h3>${movie.title}</h3>
              <p>${movie.year} • ⭐ ${movie.rating}</p>
            </div>
          </div>
        `;
      });
    } else {
      html += `<p>No data found for this section.</p>`;
    }

    html += `</div>`;

    content.classList.remove("show");
    setTimeout(() => {
      content.innerHTML = html;
      content.classList.add("show");
    }, 200);
  }

  function toggleTheme() {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    const icon = isLight ? "🌞" : "🌙";
    themeIcon.textContent = icon;
    themeIconNav.textContent = icon;
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }

  window.onload = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.add("light");
      themeIcon.textContent = "🌞";
      themeIconNav.textContent = "🌞";
    }

    if (isLoggedIn === "true") {
      modal.style.display = "none";
      navbar.style.display = "flex";
      content.style.display = "block";
      showContent("home");
    }
  };