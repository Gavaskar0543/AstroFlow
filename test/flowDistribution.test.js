const assert = require('assert');
const FlowDistribution = require('../services/flowDistributionService');
const Astrologer = require('../models/astrologerModel');

describe('FlowDistribution', function() {
    it('should allocate users fairly among astrologers', async function() {
        const flowDistribution = new FlowDistribution();
        await Astrologer.deleteMany({}); // Clear the collection before the test

        const astrologer1 = new Astrologer({ name: 'Astrologer1' });
        const astrologer2 = new Astrologer({ name: 'Astrologer2' });
        await astrologer1.save();
        await astrologer2.save();

        const user1 = { id: 1, name: 'User1' };
        const user2 = { id: 2, name: 'User2' };
        const user3 = { id: 3, name: 'User3' };

        await flowDistribution.allocateUserToAstrologer(user1);
        await flowDistribution.allocateUserToAstrologer(user2);
        await flowDistribution.allocateUserToAstrologer(user3);

        const astrologers = await Astrologer.find();
        assert.strictEqual(astrologers[0].connections + astrologers[1].connections, 3);
    });
});
