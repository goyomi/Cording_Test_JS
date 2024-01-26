function solution(babbling) {
    const babbles = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (const babble of babbling) {
        let isValid = true;
        let tempBabble = babble;

        for (const sound of babbles) {
            tempBabble = tempBabble.split(sound).join(" ");
        }

        const parts = tempBabble.split(" ").filter(Boolean);
        if (parts.length > 0) {
            isValid = false;
        } else {
            let prevSound = "";
            for (const sound of babbles) {
                if (babble.includes(sound)) {
                    if (prevSound === sound) {
                        isValid = false;
                        break;
                    }
                    prevSound = sound;
                }
            }
        }

        if (isValid) {
            count++;
        }
    }

    return count;
}
