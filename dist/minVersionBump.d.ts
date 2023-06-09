import { VersionUpgrade } from '@kalycoinproject/token-lists/dist/getVersionUpgrade';
import { TokenInfo } from '@kalycoinproject/token-lists/dist/types';
/**
 * Returns the minimum version bump for the given list
 * @param baseList the base list of tokens
 * @param updatedList the updated list of tokens
 */
export declare function minVersionBump(baseList: TokenInfo[], updatedList: TokenInfo[]): VersionUpgrade;
