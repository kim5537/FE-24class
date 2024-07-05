const changphone1 = () => {
  const phone1 = document.querySelector("#phone1").value;
  if (phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
};
const changphone2 = () => {
  const phone2 = document.querySelector("#phone2").value;
  if (phone1.length === 4) {
    document.querySelector("#phone3").focus();
  }
};

const changphone3 = () => {
  const phone1 = document.querySelector("#phon1").value;
  const phone2 = document.querySelector("#phon2").value;
  const phone3 = document.querySelector("#phon3").value;

  if (phone1.length === 3 && phone2.length === 4 && phone3 === 4) {
    document.querySelector("#token_button").removeAttribute("disabled");
  }
};
