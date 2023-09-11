document.addEventListener("DOMContentLoaded", function () {
    const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    
    function getCurrentDayOfWeek() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        return daysOfWeek[today.getUTCDay()];
    }

    
    function getCurrentUTCTime() {
        return Date.now();
    }

   
    slackUserNameElement.textContent = "Juliana Azong";
    currentDayOfTheWeekElement.textContent = `Current Day: ${getCurrentDayOfWeek()}`;
    currentUTCTimeElement.textContent = `Current UTC Time: ${getCurrentUTCTime()} milliseconds`;
});