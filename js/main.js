
(function () {

    // Minta - próba
    let todos = [
        { title: "Lunch", content: "Lunch with my friend" },
        { title: "Lunch", content: "Lunch with my friend" },
        { title: "Lunch", content: "Lunch with my friend" },
    ];
    // Parts of date and day
    const bodyDate = document.querySelector('.body__date');
    const bodyDay = document.querySelector('.body__day');
    
    const localDb = {
        setItem(key, value) {
            //így kell meghívni : localDb.setItem('todos', todos );
            value = JSON.stringify(value);
            localStorage.setItem(key, value);
        },
        // localDb.getItem('todos')
        getItem(key) {
            const value = localStorage.getItem(key);
            if (!value) {
                return null;
            }
            return JSON.parse(value);
        },
        // localDb.removeItem('todos')
        removeItem(key) {
            localStorage.removeItem(key);
        },
    }
   

    // Initialize application
    const init = () => {

        const saveTodos = localDb.getItem('todos')
        if (saveTodos) { todos = saveTodos; console.log(todos);}
        //   Show date day
        const showDate = () => {
            const date = Date.now();
            const options = { weekday: "long" };
            const firstLetterUppercase = (string) => { return string.charAt(0).toUpperCase() + string.slice(1) }
            let dayOfWeek = firstLetterUppercase(new Intl.DateTimeFormat("hu", options).format(date));
            bodyDay.textContent = dayOfWeek;
            //new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(date));
            const dateOfToday = new Intl.DateTimeFormat('hu', { dateStyle: 'medium' }).format(date);
            bodyDate.textContent = dateOfToday;

        }; showDate();

    };
    init();
})()