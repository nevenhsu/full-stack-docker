import _ from 'lodash'

export function print(title: string, ...rest: any) {
    const logs = _.compact([...rest])

    console.group([` ${title} `])
    logs.forEach((el: any) => console.log(el))
    console.groupEnd()
    console.log('\n')
}

export function toBool(value: any) {
    if (
        value === true ||
        Number(value) === 1 ||
        _.lowerCase(value) === 'true'
    ) {
        return true
    }

    return false
}

export function toNumber(value: any) {
    if (value === '' || _.isNil(value)) {
        return undefined
    }

    const num = _.toNumber(value)

    if (_.isNaN(num)) {
        return undefined
    }

    return num
}

export function parseJson<T extends object = {}>(
    val: string | T,
    fallback: T
): T {
    try {
        if (!val) {
            return fallback
        }
        if (_.isObject(val)) {
            return val as T
        }

        return JSON.parse(val as string)
    } catch {
        return fallback
    }
}
