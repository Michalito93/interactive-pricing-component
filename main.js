const pageviews = document.querySelector(".pageviews span");
const price = document.querySelector(".price");
const duration = document.querySelector(".duration");
const inputSlider = document.querySelector(".slider");
const checkbox = document.querySelector(".checkbox");

const changeBilling = () => {
  if (checkbox.checked == true) {
    let cost = price.textContent;
    price.textContent = `$${(cost - cost * 0.25) * 12}`;

    duration.textContent = ` / year`;
  } else {
    duration.textContent = ` / month`;
  }
  changeTerms();
};

const changeTerms = () => {
  if (inputSlider.value == 0) {
    if (checkbox.checked == true) {
      price.textContent = `$${(8 - 8 * 0.25) * 12}.00`;
    } else {
      price.textContent = "$8.00";
    }
    pageviews.textContent = "10K";
  }

  if (inputSlider.value == 1) {
    if (checkbox.checked == true) {
      price.textContent = `$${(12 - 12 * 0.25) * 12}.00`;
    } else {
      price.textContent = "$12.00";
    }
    pageviews.textContent = "50K";
  }

  if (inputSlider.value == 2) {
    if (checkbox.checked == true) {
      price.textContent = `$${(16 - 16 * 0.25) * 12}.00`;
    } else {
      price.textContent = "$16.00";
    }
    pageviews.textContent = "100K";
  }

  if (inputSlider.value == 3) {
    if (checkbox.checked == true) {
      price.textContent = `$${(24 - 24 * 0.25) * 12}.00`;
    } else {
      price.textContent = "$24.00";
    }
    pageviews.textContent = "500K";
  }

  if (inputSlider.value == 4) {
    if (checkbox.checked == true) {
      price.textContent = `$${(36 - 36 * 0.25) * 12}.00`;
    } else {
      price.textContent = "$36.00";
    }
    pageviews.textContent = "1M";
  }
};

checkbox.addEventListener("click", changeBilling);
inputSlider.addEventListener("input", changeTerms);
