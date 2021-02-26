'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) entities = await strapi.services.offer.search(ctx.query);
    else entities = await strapi.services.offer.find(ctx.query);

    const offers = [];

    entities.forEach(entity => {
      const offer = sanitizeEntity(entity, { model: strapi.models.offer });
      if (new Date().getTime() > new Date(entity.validUntil).getTime()) {
        console.log(offer.title);
        strapi.query('offer').delete({ id: offer.id });
      } else offers.push(offer);
    });

    return offers;
  },
};
