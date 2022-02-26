export const createDataset = (
    target: number,
    length: number,
    countInView: number
) => {
    return Array(length)
        .fill(target - countInView)
        .map((v, i) => v + i)
}
