const Astrologer = require('../Model/astrologerModel');

class FlowDistribution {
    constructor() {
        this.astrologers = [];
        this.totalConnections = 0;
    }

    async loadAstrologers() {
        this.astrologers = await Astrologer.find();
    }

    getNextAstrologer() {
        if (this.astrologers.length === 0) return null;

        // Sort astrologers by number of connections (ascending) and whether they are top astrologers (descending)
        this.astrologers.sort((a, b) => {
            if (a.connections === b.connections) {
                return b.isTopAstrologer - a.isTopAstrologer;
            }
            return a.connections - b.connections;
        });

        // Return the astrologer with the least connections, giving priority to top astrologers if there's a tie
        return this.astrologers[0];
    }

    async allocateUserToAstrologer(user) {
        await this.loadAstrologers();
        const astrologer = this.getNextAstrologer();
        if (astrologer) {
            astrologer.connections++;
            await astrologer.save();
            console.log(`User ${user.name} allocated to Astrologer ${astrologer.name}`);
        } else {
            console.log('No astrologers available.');
        }
    }
}

module.exports = FlowDistribution;
