
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Here you can work with the JSON data
    const daily = document.getElementById("daily");
    const weekly = document.getElementById("weekly");
    const monthly = document.getElementById("monthly");

    let contentHTML = '';

    data.forEach((options)=>{
        contentHTML += `
        
        <div class="content">
            <div class="background" style="
            background: url(${options.background}), ${options.backgroundColor};
            background-repeat: no-repeat;
            background-position: 9.5rem -0.3rem">
               
            </div>

            <div class="main-content">
                <div class="content-header">
                    <h3>${options.title}</h3>
                    <img src="/images/icon-ellipsis.svg" alt="">
                </div>
                <div class="content-body">
                    <h2>
                       0hrs
                    </h2>
                </div>
                <div class="content-footer">
                    <span>Last Week - 0 hrs
                    </span>
                </div>
            </div>
        </div>
        
        `
    })

    function dailyTime(){
        console.log("daily");

        let dailyHTML = '';

        data.forEach((options)=>{
            dailyHTML += `
            
            <div class="content">
                <div class="background" style="
                background: url(${options.background}), ${options.backgroundColor};
                background-repeat: no-repeat;
                background-position: 9.5rem -0.3rem">
                   
                </div>
    
                <div class="main-content">
                    <div class="content-header">
                        <h3>${options.title}</h3>
                        <img src="/images/icon-ellipsis.svg" alt="">
                    </div>
                    <div class="content-body">
                        <h2>
                            ${options.timeframes.daily.current}hrs
                        </h2>
                    </div>
                    <div class="content-footer">
                        <span>Last Week - ${options.timeframes.daily.previous} hrs
                        </span>
                    </div>
                </div>
            </div>
            `
        })
        document.querySelector(".content1").innerHTML = dailyHTML;
    }
    
    function weeklyTime(){
        let weeklyHTML = '';

        data.forEach((options)=>{
            weeklyHTML += `
            
            <div class="content">
                <div class="background" style="
                background: url(${options.background}), ${options.backgroundColor};
                background-repeat: no-repeat;
                background-position: 9.5rem -0.3rem">
                   
                </div>
    
                <div class="main-content">
                    <div class="content-header">
                        <h3>${options.title}</h3>
                        <img src="/images/icon-ellipsis.svg" alt="">
                    </div>
                    <div class="content-body">
                        <h2>
                            ${options.timeframes.weekly.current}hrs
                        </h2>
                    </div>
                    <div class="content-footer">
                        <span>Last Week - ${options.timeframes.weekly.previous}hrs
                        </span>
                    </div>
                </div>
            </div>
            
            `
        })
    
        document.querySelector(".content1").innerHTML = weeklyHTML;
    }
    
    function monthlyTime(){
        let monthlyHTML = '';

        data.forEach((options)=>{
            monthlyHTML += `
            
            <div class="content">
                <div class="background" style="
                background: url(${options.background}), ${options.backgroundColor};
                background-repeat: no-repeat;
                background-position: 9.5rem -0.3rem">
                   
                </div>
    
                <div class="main-content">
                    <div class="content-header">
                        <h3>${options.title}</h3>
                        <img src="/images/icon-ellipsis.svg" alt="">
                    </div>
                    <div class="content-body">
                        <h2>
                            ${options.timeframes.monthly.current}hrs
                        </h2>
                    </div>
                    <div class="content-footer">
                        <span>Last Week - ${options.timeframes.monthly.previous}hrs
                        </span>
                    </div>
                </div>
            </div>
            
            `
        })
    
        
        document.querySelector(".content1").innerHTML = monthlyHTML;
    }

    document.querySelector(".content1").innerHTML = contentHTML;
    daily.addEventListener('click', dailyTime);
    weekly.addEventListener('click', weeklyTime);
    monthly.addEventListener('click', monthlyTime);
})


