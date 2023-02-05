import { 
    Client, 
    ModalSubmitInteraction, 
    PermissionResolvable 
} from "discord.js";

/**
 * The options required to run a ModalSubmit
 * @interface
 * @property {Client} client - The Discord.js client
 * @property {ModalSubmitInteraction} interaction - The interaction data from the modal submit event
 */
interface RunOptions {
    client: Client;
    interaction: ModalSubmitInteraction;
}

/**
 * A function that runs when the modal submit is triggered
 * @function
 * @async
 * @param {RunOptions} options - The options required to run the function
 * @returns {Promise<unknown>} - The result of the function
 */
type RunFunction = (options: RunOptions) => Promise<unknown>;

/**
 * The type of a modal submit
 * @typedef
 * @property {string} customId - The unique identifier of the modal submit
 * @property {string} description - A brief description of the modal submit
 * @property {PermissionResolvable} [permission] - The permission required to trigger the modal submit
 * @property {RunFunction} run - The function that runs when the modal submit is triggered
 */
export type ModalSubmitType = {
    customId: string;
    description: string;
    permission?: PermissionResolvable;
    run: RunFunction;
}
