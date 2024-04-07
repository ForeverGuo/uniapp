
/**
 * The current environment version of the MiniApp: 
 * develop development version, 
 * trial trial version, 
 * release official version, 
 * gray grayscale version (only supported by Alipay MiniApp)
*/
export const getVertionType = () => uni.getAccountInfoSync().miniProgram.envVersion

/**
 * current mini appId
*/
export const getAppId = () => uni.getAccountInfoSync().miniProgram.appId;


