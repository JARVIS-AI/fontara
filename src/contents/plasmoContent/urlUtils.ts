export function patternToRegex(pattern: string): RegExp {
    const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&")
    const regexString = `^${escaped.replace(/\*/g, ".*").replace(/\/$/, "")}(\\/[^\\/]+)?$`
    return new RegExp(regexString, "i")
}

export function isCurrentUrlMatched(patterns: string[]): boolean {
    const currentUrl = window.location.href
    return patterns.some((pattern) => {
        const regex = patternToRegex(pattern)
        return regex.test(currentUrl)
    })
}