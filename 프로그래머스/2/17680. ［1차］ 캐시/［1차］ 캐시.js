function solution(cacheSize, cities) {
    const cache = [];
    let runtime = 0;
    
    if(cacheSize === 0) return cities.length * 5;
    
    cities.forEach((city) => {
        city = city.toLowerCase();
        const idx = cache.findIndex(v => v.toLowerCase() === city);
        // MISS
        if (idx === -1) {
            if (cache.length < cacheSize) {
                cache.push(city);
            } else {
                cache.shift();
                cache.push(city);
            }
            runtime += 5;
        } else {
            // HIT
            cache.splice(idx, 1);
            cache.push(city);
            runtime += 1;
        }
    });
    
    return runtime;
}