import {
  differenceInDays,
  differenceInMonths,
  isSameDay,
} from "date-fns";

let h3 = document.querySelector("#days");

function timeUntilRecalentao() {
  const today = new Date();
  let recalentao = new Date(today.getFullYear(), 11, 25);

  if (today > recalentao) {
    recalentao.setFullYear(today.getFullYear() + 1);
  }

  const monthsRemaining = differenceInMonths(recalentao, today);

  const adjustedDateForDays = new Date(today);
  adjustedDateForDays.setMonth(today.getMonth() + monthsRemaining);

  const daysRemaining = differenceInDays(recalentao, adjustedDateForDays);

  const adjustedDateForSeconds = new Date(adjustedDateForDays);
  adjustedDateForSeconds.setDate(adjustedDateForDays.getDate() + daysRemaining);

  return {
    months: monthsRemaining,
    days: daysRemaining,
  };
}

function displayTimeUntilRecalentao() {
  const time = timeUntilRecalentao();
  const message =
    `Faltan ${time.months} meses, y ${time.days} dias para el recalentao`;

  h3.textContent = message;
  h3.appendChild(h3);
}

function checkRecalanteoDay() {
  const today = new Date();
  const recalentao = new Date(today.getFullYear(), 11, 25);
  return isSameDay(today, recalentao);
}

const todayIsRecalentao = checkRecalanteoDay();

if (todayIsRecalentao) {
  const message = "Es hoy!!! Ayyy padrinooo";
  h3.textContent = message;
  h3.appendChild(h3);
} else {
  displayTimeUntilRecalentao();
}
