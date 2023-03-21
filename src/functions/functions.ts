export function debounce(func: { (): void; apply?: any; }, timeout = 300): any{
    let timer: number | undefined;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => { // @ts-ignore
            func.apply(this, args); }, timeout);
    };
}

export function calculateTime(createdAt:string){
    const dateCreated = Date.parse(createdAt.toString());
    const dateNow = Date.now();
    const topicDate = new Date(dateCreated);
    const myDate = new Date(dateNow);
    const timeOfTopic = timeToTwoCharacter(topicDate.getHours().toString()) + ":" + timeToTwoCharacter(topicDate.getMinutes().toString())

    const topicDay = timeToTwoCharacter(topicDate.getDate().toString());
    const topicMonth = timeToTwoCharacter((topicDate.getMonth() + 1).toString());
    const topicHours = timeToTwoCharacter(topicDate.getHours().toString());
    const myDay = timeToTwoCharacter(myDate.getDate().toString());
    const myMonth = timeToTwoCharacter((myDate.getMonth() + 1).toString());


    if (Math.floor((dateNow - dateCreated) / (1000 * 60 * 60 * 24)) === 0){
        if (Math.floor((dateNow - dateCreated) / (1000 * 60 * 60)) === 0){
            if (Math.floor((dateNow - dateCreated) / (1000 * 60)) === 0){
                return "Тільки що"
            }
            return Math.floor((dateNow - dateCreated) / (1000 * 60 )) + " хв. тому"
        }
        return Math.floor((dateNow - dateCreated) / (1000 * 60 * 60 )) + " год. тому"
    }


    if (topicDay + topicMonth === myDay + myMonth) {
        return "Сьогодні о " + timeOfTopic
    }
    else if (timeToTwoCharacter((topicDate.getDate() + 1).toString()) + topicMonth === myDay + myMonth){
        return "Вчора о " + timeOfTopic
    }
    else if (timeToTwoCharacter((topicDate.getDate() + 2).toString()) + topicMonth === myDay + myMonth){
        return "Позавчора о " + timeOfTopic
    }
    else {
        return `${timeToTwoCharacter(topicDate.getDate().toString())}.${timeToTwoCharacter((topicDate.getMonth() + 1).toString())} о ${timeToTwoCharacter(topicDate.getHours().toString())}:${timeToTwoCharacter(topicDate.getMinutes().toString())}`
    }
}

export function timeToTwoCharacter(word: string){
    return word.length === 1 ? "0" + word : word
}