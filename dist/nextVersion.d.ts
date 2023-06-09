import { VersionUpgrade } from '@kalycoinproject/token-lists/dist/getVersionUpgrade';
import { Version } from '@kalycoinproject/token-lists/dist/types';
/**
 * Returns the next version of the list given a base version and the upgrade type
 * @param base current version
 * @param bump the upgrade type
 */
export declare function nextVersion(base: Version, bump: VersionUpgrade): Version;
