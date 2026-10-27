/* =========================
   اطلاعات کشورهای جهان
========================= */

const countries = [
  {
    name: "Canada",
    nameFa: "کانادا",
    flag: "🇨🇦",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Louise%2C_Banff_National_Park.jpg",
    description:
      "کشوری پهناور با طبیعتی زیبا، دریاچه‌های شفاف و جنگل‌های گسترده.",
    capital: "اتاوا",
    language: "انگلیسی و فرانسوی",
    currency: "دلار کانادا",
    population: "حدود ۴۱ میلیون نفر",
    climate: "از قطبی تا معتدل، بسته به منطقه",
    culture: "جامعه‌ای چندفرهنگی با تأثیرات انگلیسی، فرانسوی و بومی",
    attractions: [
      "آبشار نیاگارا",
      "پارک ملی بنف",
      "دریاچه لوئیز",
      "برج سی‌ان در تورنتو",
    ],
    funFact: "کانادا یکی از طولانی‌ترین خطوط ساحلی جهان را دارد.",
  },
  {
    name: "United States",
    nameFa: "ایالات متحده آمریکا",
    flag: "🇺🇸",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Grand_Canyon_view_from_Pima_Point_2010.jpg",
    description: "کشوری بزرگ با شهرهای مشهور، طبیعت متنوع و جاذبه‌های فراوان.",
    capital: "واشینگتن دی‌سی",
    language: "انگلیسی رایج‌ترین زبان است",
    currency: "دلار آمریکا",
    population: "حدود ۳۴۰ میلیون نفر",
    climate: "از قطبی تا گرمسیری",
    culture: "ترکیبی از فرهنگ‌های گوناگون و مهاجران سراسر جهان",
    attractions: [
      "گرند کنیون",
      "مجسمه آزادی",
      "پارک ملی یلواستون",
      "پل گلدن گیت",
    ],
    funFact: "آلاسکا بزرگ‌ترین ایالت آمریکا از نظر مساحت است.",
  },
  {
    name: "Mexico",
    nameFa: "مکزیک",
    flag: "🇲🇽",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_3.jpg",
    description: "کشوری باستانی با غذاهای معروف، آثار تاریخی و سواحل زیبا.",
    capital: "مکزیکوسیتی",
    language: "اسپانیایی و زبان‌های بومی",
    currency: "پزوی مکزیک",
    population: "حدود ۱۳۰ میلیون نفر",
    climate: "از خشک و بیابانی تا گرمسیری",
    culture: "ترکیبی از میراث بومی، تمدن‌های باستانی و فرهنگ اسپانیایی",
    attractions: [
      "چیچن ایتزا",
      "موزه ملی مردم‌شناسی",
      "سواحل کانکون",
      "شهر تاریخی مکزیکوسیتی",
    ],
    funFact: "چیچن ایتزا یکی از مشهورترین آثار تمدن مایا است.",
  },
  {
    name: "Guatemala",
    nameFa: "گواتمالا",
    flag: "🇬🇹",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tikal_Temple_I_2009.jpg",
    description:
      "کشوری در آمریکای مرکزی با آتشفشان‌ها، جنگل‌های سرسبز و آثار مایا.",
    capital: "گواتمالاسیتی",
    language: "اسپانیایی و زبان‌های بومی",
    currency: "کتزال گواتمالا",
    population: "حدود ۱۸ میلیون نفر",
    climate: "گرمسیری، با مناطق خنک‌تر در ارتفاعات",
    culture: "میراث غنی تمدن مایا و سنت‌های بومی",
    attractions: [
      "پارک ملی تیکال",
      "دریاچه آتیتلان",
      "شهر آنتیگوا گواتمالا",
      "بازار چیچی‌کاستنانگو",
    ],
    funFact: "تیکال یکی از شهرهای مهم تمدن باستانی مایا بوده است.",
  },
  {
    name: "Belize",
    nameFa: "بلیز",
    flag: "🇧🇿",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Blue_Hole.jpg",
    description:
      "کشوری کوچک با آب‌های فیروزه‌ای، صخره‌های مرجانی و طبیعت استوایی.",
    capital: "بلموپان",
    language: "انگلیسی",
    currency: "دلار بلیز",
    population: "حدود ۴۰۰ هزار نفر",
    climate: "گرمسیری",
    culture: "ترکیبی از فرهنگ‌های مایایی، کریول و کارائیبی",
    attractions: [
      "گودال آبی بزرگ",
      "صخره مرجانی بلیز",
      "ویرانه‌های مایا در کاراکول",
      "جزیره کی کولکر",
    ],
    funFact: "بلیز تنها کشور آمریکای مرکزی است که زبان رسمی آن انگلیسی است.",
  },
  {
    name: "Honduras",
    nameFa: "هندوراس",
    flag: "🇭🇳",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cop%C3%A1n_Sculpture_Museum.jpg",
    description: "کشوری با جنگل‌های گرمسیری، سواحل کارائیب و آثار تاریخی مایا.",
    capital: "تگوسیگالپا",
    language: "اسپانیایی",
    currency: "لمپیرا",
    population: "حدود ۱۱ میلیون نفر",
    climate: "گرمسیری با تفاوت دما در ارتفاعات",
    culture: "ترکیبی از سنت‌های بومی و فرهنگ اسپانیایی",
    attractions: [
      "ویرانه‌های کوپان",
      "جزایر خلیج",
      "پارک ملی لا تیگره",
      "سواحل رواتان",
    ],
    funFact: "کوپان به‌خاطر کتیبه‌ها و آثار هنری تمدن مایا شناخته می‌شود.",
  },
  {
    name: "El Salvador",
    nameFa: "السالوادور",
    flag: "🇸🇻",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Santa_Ana_Volcano_El_Salvador.jpg",
    description:
      "کوچک‌ترین کشور آمریکای مرکزی با آتشفشان‌ها، دریاچه‌ها و سواحل موج‌سواری.",
    capital: "سان سالوادور",
    language: "اسپانیایی",
    currency: "دلار آمریکا",
    population: "حدود ۶ میلیون نفر",
    climate: "گرمسیری با فصل خشک و بارانی",
    culture: "فرهنگی با ریشه‌های بومی و اسپانیایی",
    attractions: [
      "آتشفشان سانتا آنا",
      "دریاچه کواتپکه",
      "مسیر گل‌ها",
      "ساحل ال تونکو",
    ],
    funFact: "السالوادور به‌دلیل موج‌های مناسب، مقصد محبوب موج‌سواران است.",
  },
  {
    name: "Nicaragua",
    nameFa: "نیکاراگوئه",
    flag: "🇳🇮",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Granada_Nicaragua.jpg",
    description:
      "سرزمینی با دریاچه‌های بزرگ، آتشفشان‌ها و شهرهای تاریخی رنگارنگ.",
    capital: "ماناگوئه",
    language: "اسپانیایی",
    currency: "کوردوبای نیکاراگوئه",
    population: "حدود ۷ میلیون نفر",
    climate: "گرمسیری",
    culture: "ترکیبی از سنت‌های بومی و اسپانیایی",
    attractions: [
      "شهر گرانادا",
      "دریاچه نیکاراگوئه",
      "جزیره اومتپه",
      "آتشفشان ماسایا",
    ],
    funFact: "جزیره اومتپه در دریاچه نیکاراگوئه شکل گرفته و دو آتشفشان دارد.",
  },
  {
    name: "Costa Rica",
    nameFa: "کاستاریکا",
    flag: "🇨🇷",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Arenal_Volcano_Costa_Rica.jpg",
    description:
      "کشوری سرسبز و مشهور به تنوع زیستی، جنگل‌های بارانی و طبیعت حفاظت‌شده.",
    capital: "سن خوزه",
    language: "اسپانیایی",
    currency: "کولون کاستاریکا",
    population: "حدود ۵ میلیون نفر",
    climate: "گرمسیری، با مناطق خنک‌تر در ارتفاعات",
    culture: "فرهنگی مهمان‌نواز با تأکید بر طبیعت و زندگی آرام",
    attractions: [
      "آتشفشان آرنال",
      "پارک ملی مانوئل آنتونیو",
      "جنگل ابری مونته‌ورده",
      "سواحل اقیانوس آرام",
    ],
    funFact:
      "کاستاریکا بخش قابل‌توجهی از سرزمین خود را به حفاظت از طبیعت اختصاص داده است.",
  },
  {
    name: "Panama",
    nameFa: "پاناما",
    flag: "🇵🇦",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Panama_Canal_Gatun_Locks.jpg",
    description:
      "کشوری میان دو قاره که به کانال مهم دریایی و سواحل زیبایش معروف است.",
    capital: "پاناماسیتی",
    language: "اسپانیایی",
    currency: "بالبوآ و دلار آمریکا",
    population: "حدود ۴.۵ میلیون نفر",
    climate: "گرمسیری و مرطوب",
    culture: "ترکیبی از فرهنگ‌های آمریکای لاتین، کارائیب و جوامع مهاجر",
    attractions: [
      "کانال پاناما",
      "محله تاریخی کاسکو ویخو",
      "جزایر سن بلاس",
      "پارک ملی کویبا",
    ],
    funFact:
      "کانال پاناما مسیر دریایی میان اقیانوس اطلس و اقیانوس آرام را کوتاه می‌کند.",
  },
  {
    name: "Cuba",
    nameFa: "کوبا",
    flag: "🇨🇺",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Havana_Cuba.jpg",
    description:
      "جزیره‌ای در دریای کارائیب با موسیقی پرشور، خودروهای کلاسیک و سواحل زیبا.",
    capital: "هاوانا",
    language: "اسپانیایی",
    currency: "پزوی کوبا",
    population: "حدود ۱۰ میلیون نفر",
    climate: "گرمسیری",
    culture: "مشهور به موسیقی، رقص، معماری تاریخی و سنت‌های کارائیبی",
    attractions: [
      "هاوانای قدیم",
      "دره وینیالس",
      "ساحل وارادرو",
      "شهر ترینیداد",
    ],
    funFact:
      "هاوانای قدیم به‌دلیل معماری تاریخی‌اش در فهرست میراث جهانی یونسکو قرار دارد.",
  },
];

/* =========================
   دسترسی به عناصر HTML
========================= */

const countriesGrid = document.getElementById("countriesGrid");
const countrySearch = document.getElementById("countrySearch");
const noResults = document.getElementById("noResults");
const countryDetails = document.getElementById("countryDetails");
const detailsContent = document.getElementById("detailsContent");
const backButton = document.getElementById("backButton");

/* =========================
   یکسان‌سازی متن جست‌وجو
========================= */

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .trim();
}

/* =========================
   ساخت کارت‌های کشورها
========================= */

function displayCountries(countryList) {
  countriesGrid.innerHTML = "";

  noResults.hidden = countryList.length !== 0;

  countryList.forEach(function (country) {
    const card = document.createElement("article");
    card.className = "country-card";

    card.innerHTML = `
            <img
                class="country-image"
                src="${country.image}"
                alt="تصویری از ${country.nameFa}"
                loading="lazy"
            >

            <div class="country-card-content">
                <div class="country-flag">${country.flag}</div>

                <h3>${country.nameFa}</h3>

                <p>${country.description}</p>

                <button
                    type="button"
                    class="explore-button"
                    data-country="${country.name}"
                >
                    آشنایی بیشتر
                </button>
            </div>
        `;

    const image = card.querySelector(".country-image");

    image.addEventListener("error", function () {
      image.alt = `تصویر ${country.nameFa} در دسترس نیست`;
      image.classList.add("image-unavailable");
    });

    countriesGrid.appendChild(card);
  });
}

/* =========================
   نمایش جزئیات یک کشور
========================= */

function showCountryDetails(countryName) {
  const country = countries.find(function (item) {
    return item.name === countryName;
  });

  if (!country) {
    return;
  }

  const attractionsHTML = country.attractions
    .map(function (attraction) {
      return `<li>${attraction}</li>`;
    })
    .join("");

  detailsContent.innerHTML = `
        <h2 class="details-title">
            ${country.flag} ${country.nameFa}
        </h2>

        <p class="details-intro">
            ${country.description}
        </p>

        <img
            class="details-image"
            src="${country.image}"
            alt="تصویری از ${country.nameFa}"
        >

        <div class="details-grid">
            <div class="detail-item">
                <h3>پایتخت</h3>
                <p>${country.capital}</p>
            </div>

            <div class="detail-item">
                <h3>زبان</h3>
                <p>${country.language}</p>
            </div>

            <div class="detail-item">
                <h3>واحد پول</h3>
                <p>${country.currency}</p>
            </div>

            <div class="detail-item">
                <h3>جمعیت تقریبی</h3>
                <p>${country.population}</p>
            </div>

            <div class="detail-item">
                <h3>آب‌وهوا</h3>
                <p>${country.climate}</p>
            </div>

            <div class="detail-item">
                <h3>فرهنگ</h3>
                <p>${country.culture}</p>
            </div>
        </div>

        <h3 class="details-subheading">جاذبه‌های گردشگری</h3>

        <ul class="attractions-list">
            ${attractionsHTML}
        </ul>

        <div class="fun-fact">
            <h3>آیا می‌دانستید؟</h3>
            <p>${country.funFact}</p>
        </div>
    `;

  countryDetails.hidden = false;

  countryDetails.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* =========================
   جست‌وجوی کشورها
========================= */

countrySearch.addEventListener("input", function () {
  const searchText = normalizeText(countrySearch.value);

  const filteredCountries = countries.filter(function (country) {
    const persianName = normalizeText(country.nameFa);
    const englishName = normalizeText(country.name);

    return persianName.includes(searchText) || englishName.includes(searchText);
  });

  displayCountries(filteredCountries);
});

/* =========================
   انتخاب کارت کشور
========================= */

countriesGrid.addEventListener("click", function (event) {
  const button = event.target.closest("[data-country]");

  if (!button) {
    return;
  }

  showCountryDetails(button.dataset.country);
});

/* =========================
   بازگشت به فهرست کشورها
========================= */

backButton.addEventListener("click", function () {
  countryDetails.hidden = true;

  document.getElementById("countries").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/* =========================
   نمایش سال جاری
========================= */

document.getElementById("currentYear").textContent = new Date().getFullYear();

/* =========================
   اجرای اولیه سایت
========================= */

displayCountries(countries);
