// test/flowDistribution.test.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const assert = require('assert');
const FlowDistribution = require('../Service/flowDistributionService');
const Astrologer = require('../Model/astrologerModel');

describe('FlowDistribution', function() {
    this.timeout(10000); // Setting a higher timeout for potential async operations

    let mongoServer;

    before(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    after(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async function() {
        await Astrologer.deleteMany({});
    });

    it('should allocate users fairly among astrologers', async function() {
        const flowDistribution = new FlowDistribution();

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
