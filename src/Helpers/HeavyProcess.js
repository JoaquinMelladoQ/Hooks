export const heavyProcess = ( iterations ) => {
    for (let i = 0; i < iterations; i++) {
        console.log('There we are...')
    }
    return `${ iterations } iterations done`
}