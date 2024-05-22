/*!
 * @license
 * Copyright c 2019 Xyleme, Inc., 700 17th Street, Suite 1950 Denver, CO. 80202 USA.
 * All rights reserved.
 *
 * This file and related documentation are protected by copyright and
 * are distributed under licenses regarding their use, copying, distribution,
 * and decompilation. No part of this product or related documentation may
 * be reproduced or transmitted in any form or by any means, electronic or
 * mechanical, for any purpose, without the express written permission of
 * Xyleme, Inc.
*/

define(function () {
    'use strict';
    return {

        requestNext: function () {},

        requestPrevious: function () {},

        requestChoose: function () {},

        determineCustomInitialDestination: function () {
            return false;
        },

        // Note that this function needs to be moved to be global
        getUrlQuery: function () {
            return false;
        }

    };
});
