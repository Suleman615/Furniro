
export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)
    return `${window.location.pathname}?${searchParams.toString()}`
}

export const products = [
    {
        "webID": "2861368",
        "productTitle": "Simply Vera Vera Wang Supima Cotton 600 Thread Count Sheet Set or Pillowcases",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/2861368_Shadow_Gray?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 59.99,
                    "maxPrice": 179.99
                },
                "salePrice": {
                    "minPrice": 39.99,
                    "maxPrice": 109.99
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.4,
            "count": 10355
        },
        "swatchImages": [
            {
                "color": "Seaglass",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Seaglass_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Steel",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Steel_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Shadow Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Shadow_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Plum",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Plum_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Ivory Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Ivory_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_White_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Periwinkle",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Periwinkle_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Ivory",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Ivory_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Seaglass Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Seaglass_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Periwinkle Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Periwinkle_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Plum Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Plum_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Steel Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Steel_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Mushroom",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Mushroom_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Indigo Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Indigo_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Silver",
                "URL": "https://media.kohlsimg.com/is/image/kohls/2861368_Silver_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-2861368/simply-vera-vera-wang-4-piece-600-thread-count-sheet-set.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": null,
        "prodType": "product",
        "displayColor": [
            "Shadow Gray"
        ],
        "availableColr": [
            "Seaglass",
            "White",
            "Steel",
            "Shadow Gray",
            "Plum",
            "Ivory Stripe",
            "White Stripe",
            "Periwinkle",
            "Ivory",
            "Seaglass Stripe",
            "Periwinkle Stripe",
            "Plum Stripe",
            "Steel Stripe",
            "Blue",
            "Mushroom",
            "Indigo Stripe",
            "Silver"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 31.99,
                "maxPrice": 87.99
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "3354493",
        "productTitle": "Women's Croft & Barrow® Effortless Stretch Pull-On Straight-Leg Pants",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/3354493_Genuine_Navy?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 40,
                    "maxPrice": null
                },
                "salePrice": {
                    "minPrice": 34.99,
                    "maxPrice": null
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.2,
            "count": 6502
        },
        "swatchImages": [
            {
                "color": "Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Genuine Navy",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Genuine_Navy_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Cobblestone",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Cobblestone_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Cocoa",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Cocoa_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Forged Iron",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Forged_Iron_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Teal",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Teal_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Crimson",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Crimson_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Verawood",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Verawood_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Dark Sage Heather",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3354493_Dark_Sage_Heather_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-3354493/womens-croft-barrow-effortless-stretch-pull-on-pants.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": "https://media.kohlsimg.com/is/image/kohls/3354493_ALT",
        "prodType": "product",
        "displayColor": [
            "Genuine Navy"
        ],
        "availableColr": [
            "Black",
            "Genuine Navy",
            "Cobblestone",
            "Cocoa",
            "Forged Iron",
            "White",
            "Teal",
            "Crimson",
            "Verawood",
            "Dark Sage Heather"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 27.99,
                "maxPrice": null
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "3404073",
        "productTitle": "Simply Vera Vera Wang 800 Thread Count Egyptian Cotton Sheet Set or Pillowcases",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/3404073_Gray?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 109.99,
                    "maxPrice": 239.99
                },
                "salePrice": {
                    "minPrice": 79.99,
                    "maxPrice": 169.99
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.4,
            "count": 5879
        },
        "swatchImages": [
            {
                "color": "Slate Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Slate_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Lavender",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Lavender_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Whisper White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Whisper_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Mushroom",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Mushroom_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Indigo",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Indigo_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blush",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Blush_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Charcoal Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Charcoal_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_White_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Ocean Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Ocean_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Espresso",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Espresso_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Slate Blue Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Slate_Blue_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Gray_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Ash Lilac",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3404073_Ash_Lilac_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-3404073/simply-vera-vera-wang-800-thread-count-sheet-set.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": null,
        "prodType": "product",
        "displayColor": [
            "Gray"
        ],
        "availableColr": [
            "Slate Blue",
            "Lavender",
            "Whisper White",
            "Mushroom",
            "Gray",
            "White",
            "Indigo",
            "Blush",
            "Charcoal Stripe",
            "White Stripe",
            "Ocean Blue",
            "Espresso",
            "Slate Blue Stripe",
            "Gray Stripe",
            "Ash Lilac"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 63.99,
                "maxPrice": 135.99
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "4569317",
        "productTitle": "Sonoma Goods For Life® Ultimate Bath Towel, Bath Sheet, Hand Towel or Washcloth with Hygro® Technology",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/4569317_White?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 5.99,
                    "maxPrice": 14.99
                },
                "salePrice": null,
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 21:14:45 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 21:14:45 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": null,
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.4,
            "count": 9770
        },
        "swatchImages": [
            {
                "color": "Dark Teal",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Dark_Teal_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Deep Berry",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Deep_Berry_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Navy",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Navy_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Linen",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Linen_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Chocolate",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Chocolate_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Jade",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Jade_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Sunset",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Sunset_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Saffron",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Saffron_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Lilac",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Lilac_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Light Green",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Light_Green_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Aqua",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Aqua_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Silver",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Silver_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Dark Aqua",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Dark_Aqua_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Light Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Light_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Stone Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Stone_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Red",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Red_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Purple",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Purple_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Taupe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Taupe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Lemon Drop",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Lemon_Drop_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Winter Sky",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Winter_Sky_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Mocha Mousse",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569317_Mocha_Mousse_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-4569317/sonoma-goods-for-life-ultimate-bath-towel-bath-sheet-hand-towel-or-washcloth-with-hygro-technology.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": "https://media.kohlsimg.com/is/image/kohls/4569317_ALT",
        "prodType": "product",
        "displayColor": [
            "White"
        ],
        "availableColr": [
            "Dark Teal",
            "Deep Berry",
            "Navy",
            "Linen",
            "Chocolate",
            "Jade",
            "Sunset",
            "White",
            "Saffron",
            "Black",
            "Lilac",
            "Light Green",
            "Aqua",
            "Blue",
            "Silver",
            "Dark Aqua",
            "Gray",
            "Light Gray",
            "Stone Blue",
            "Red",
            "Purple",
            "Taupe",
            "Lemon Drop",
            "Winter Sky",
            "Mocha Mousse"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 4.79,
                "maxPrice": 11.99
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "4959669",
        "productTitle": "Women's Croft & Barrow® Classic Ribbed Open-Front Cardigan",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/4959669_Oatmeal?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 40,
                    "maxPrice": null
                },
                "salePrice": {
                    "minPrice": 29.99,
                    "maxPrice": null
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Original",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.6,
            "count": 2019
        },
        "swatchImages": [
            {
                "color": "Black White Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Black_White_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Navy",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Navy_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Oatmeal",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Oatmeal_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Maroon",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Maroon_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Mushroom",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Mushroom_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Pink",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Pink_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Camel",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Camel_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "True Red",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_True_Red_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Teal",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4959669_Teal_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [],
        "valueAddedBadges": null,
        "seoURL": "/product/prd-4959669/womens-croft-barrow-ribbed-classic-open-front-cardigan.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": "https://media.kohlsimg.com/is/image/kohls/4959669_ALT",
        "prodType": "product",
        "displayColor": [
            "Oatmeal"
        ],
        "availableColr": [
            "Black White Stripe",
            "Navy",
            "Gray",
            "Oatmeal",
            "Blue",
            "Maroon",
            "Mushroom",
            "Black",
            "Pink",
            "Camel",
            "True Red",
            "Teal"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 23.99,
                "maxPrice": null
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "5896187",
        "productTitle": "Ninja Woodfire Outdoor Grill & Smoker, 7-in-1 Master Grill, BBQ Smoker & Air Fryer",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/5896187?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 419.99,
                    "maxPrice": null
                },
                "salePrice": {
                    "minPrice": 369.99,
                    "maxPrice": null
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.8,
            "count": 1088
        },
        "swatchImages": [],
        "valueAddedIcons": [],
        "valueAddedBadges": null,
        "seoURL": "/product/prd-5896187/ninja-woodfire-outdoor-grill-smoker-7-in-1-master-grill-bbq-smoker-air-fryer.jsp",
        "variations": "None",
        "altImageUrl": null,
        "prodType": "product",
        "displayColor": [
            "Multi"
        ],
        "availableColr": [
            "Multi"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": false,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 295.99,
                "maxPrice": null
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "KC Earn & Rewards Only"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "4569328",
        "productTitle": "The Big One® Solid Bath Towel, Bath Sheet, Hand Towel or Washcloth",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/4569328_Light_Teal?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 2.99,
                    "maxPrice": 9.99
                },
                "salePrice": null,
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 22:16:17 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 22:16:17 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": null,
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4,
            "count": 15984
        },
        "swatchImages": [
            {
                "color": "Raspberry",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Raspberry_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Turquoise",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Turquoise_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Spearmint",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Spearmint_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Light Teal",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Light_Teal_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Butter Yellow",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Butter_Yellow_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Medium Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Medium_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Sand Stone",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Sand_Stone_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Bright Navy",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Bright_Navy_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Tango Red",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Tango_Red_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Light Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Light_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Bright Strawberry",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569328_Bright_Strawberry_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "morecolors_Badge.gif",
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": [
                "morecolors_badge"
            ]
        },
        "seoURL": "/product/prd-4569328/the-big-one-solid-bath-towel-bath-sheet-hand-towel-or-washcloth.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": "https://media.kohlsimg.com/is/image/kohls/4569328_ALT",
        "prodType": "product",
        "displayColor": [
            "Light Teal"
        ],
        "availableColr": [
            "Raspberry",
            "Turquoise",
            "Spearmint",
            "Blue",
            "Light Teal",
            "Butter Yellow",
            "White",
            "Medium Gray",
            "Black",
            "Sand Stone",
            "Bright Navy",
            "Tango Red",
            "Light Gray",
            "Bright Strawberry"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 2.39,
                "maxPrice": 7.99
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "3393100",
        "productTitle": "Sonoma Goods For Life® The Easy Care 525 Thread Count Sheet Set or Pillowcases",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/3393100_Gray?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 39.99,
                    "maxPrice": 109.99
                },
                "salePrice": {
                    "minPrice": 29.99,
                    "maxPrice": 69.99
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 21:49:14 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 21:49:14 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.4,
            "count": 7026
        },
        "swatchImages": [
            {
                "color": "Tossed Floral Beige",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Tossed_Floral_Beige_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Light Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Light_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Diamond Geo",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Diamond_Geo_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Grid",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Grid_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Palm",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Palm_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blush",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Blush_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Navy",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Navy_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blue Paisley",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Blue_Paisley_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Mauve",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Mauve_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Block Print",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Block_Print_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Dotted Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3393100_Dotted_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-3393100/croft-barrow-the-easy-care-525-count-sheet-set.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": "https://media.kohlsimg.com/is/image/kohls/3393100_ALT",
        "prodType": "product",
        "displayColor": [
            "Gray"
        ],
        "availableColr": [
            "Tossed Floral Beige",
            "Light Gray",
            "White",
            "Diamond Geo",
            "Blue",
            "Gray",
            "Grid",
            "Palm",
            "Blush",
            "Navy",
            "Blue Paisley",
            "Mauve",
            "Block Print",
            "Dotted Stripe"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 23.99,
                "maxPrice": 55.99
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "1944597",
        "productTitle": "The Big One® Oversized Supersoft Plush Throw",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/1944597_Holiday_Floral?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 19.99,
                    "maxPrice": null
                },
                "salePrice": null,
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 22:54:11 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 22:54:11 -0800",
                "isCurrentPrice": true,
                "regularPriceType": null,
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": null,
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.7,
            "count": 28867
        },
        "swatchImages": [
            {
                "color": "Gray Solid",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Gray_Solid_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Light Blue Dogs",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Light_Blue_Dogs_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Khaki White Buff",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Khaki_White_Buff_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray Jacquard",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Gray_Jacquard_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Navy Jacquard",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Navy_Jacquard_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Green Jacquard",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Green_Jacquard_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Sunflower",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Sunflower_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Bird Floral",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Bird_Floral_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Holiday Floral",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Holiday_Floral_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Owls",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Owls_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Texas Bandana",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Texas_Bandana_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray Geo",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Gray_Geo_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Red Plaid",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Red_Plaid_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Pumpkin Patch",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Pumpkin_Patch_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Celestial Moths",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Celestial_Moths_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Floral Quilt",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Floral_Quilt_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Dog Patchwork",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Dog_Patchwork_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Cats Being Cats",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Cats_Being_Cats_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Football",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Football_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blue Epoxy Swirl",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Blue_Epoxy_Swirl_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "The Great Outdoors",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_The_Great_Outdoors_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Space Cowgirl",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Space_Cowgirl_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Pumpkin Spice",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Pumpkin_Spice_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray Plaid",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Gray_Plaid_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Swirls",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Swirls_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Charcoal Geo",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Charcoal_Geo_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Spring Flowers",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Spring_Flowers_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Celestial Blue Plaid",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Celestial_Blue_Plaid_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Butterfly And Moths",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Butterfly_And_Moths_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Sage Jacquard",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Sage_Jacquard_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Santa Unicorn",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Santa_Unicorn_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Navy Fairisle",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Navy_Fairisle_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Holiday Trucks",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1944597_Holiday_Trucks_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "morecolors_Badge.gif",
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": [
                "morecolors_badge"
            ]
        },
        "seoURL": "/product/prd-1944597/the-big-one-super-soft-plush-throw.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": null,
        "prodType": "product",
        "displayColor": [
            "Holiday Floral"
        ],
        "availableColr": [
            "Gray Solid",
            "Light Blue Dogs",
            "Khaki White Buff",
            "Gray Jacquard",
            "Navy Jacquard",
            "Green Jacquard",
            "Sunflower",
            "Bird Floral",
            "Holiday Floral",
            "Owls",
            "Texas Bandana",
            "Gray Geo",
            "Red Plaid",
            "Pumpkin Patch",
            "Celestial Moths",
            "Floral Quilt",
            "Dog Patchwork",
            "Cats Being Cats",
            "Football",
            "Blue Epoxy Swirl",
            "The Great Outdoors",
            "Space Cowgirl",
            "Pumpkin Spice",
            "Gray Plaid",
            "Swirls",
            "Charcoal Geo",
            "Spring Flowers",
            "Celestial Blue Plaid",
            "Butterfly And Moths",
            "Sage Jacquard",
            "Santa Unicorn",
            "Navy Fairisle",
            "Holiday Trucks"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 15.99,
                "maxPrice": null
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "4569319",
        "productTitle": "Sonoma Goods For Life® Quick Dry Ribbed Bath Towel, Bath Sheet, Hand Towel or Washcloth",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/4569319_Blue?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 5.99,
                    "maxPrice": 39.99
                },
                "salePrice": null,
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 21:59:59 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 21:59:59 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": null,
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.5,
            "count": 7870
        },
        "swatchImages": [
            {
                "color": "Seafoam",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Seafoam_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Dark Aqua",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Dark_Aqua_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Dark Purple",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Dark_Purple_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Light Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Light_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Green",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Green_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Navy",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Navy_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Taupe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Taupe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Charcoal",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Charcoal_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Soft Pink",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Soft_Pink_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Cloud Gray",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Cloud_Gray_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Yellow",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Yellow_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Tea Green",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Tea_Green_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Lilac",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Lilac_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Brown",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Brown_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Aqua",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Aqua_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Gray Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569319_Gray_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "morecolors_Badge.gif",
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": [
                "morecolors_badge"
            ]
        },
        "seoURL": "/product/prd-4569319/sonoma-goods-for-life-quick-dry-ribbed-bath-towel-bath-sheet-hand-towel-or-washcloth.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": "https://media.kohlsimg.com/is/image/kohls/4569319_ALT",
        "prodType": "product",
        "displayColor": [
            "Blue"
        ],
        "availableColr": [
            "Seafoam",
            "Dark Aqua",
            "Dark Purple",
            "Light Blue",
            "Gray",
            "Green",
            "Navy",
            "Taupe",
            "Charcoal",
            "Blue",
            "Soft Pink",
            "Cloud Gray",
            "Yellow",
            "Tea Green",
            "White",
            "Black",
            "Lilac",
            "Brown",
            "Aqua",
            "Gray Stripe"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 4.79,
                "maxPrice": 31.99
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "4569322",
        "productTitle": "Simply Vera Vera Wang Signature Bath Towel, Bath Sheet, Hand Towel or Washcloth",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/4569322_Seaglass_Stripe?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 10.99,
                    "maxPrice": 34.99
                },
                "salePrice": null,
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": null,
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.6,
            "count": 4194
        },
        "swatchImages": [
            {
                "color": "Sea Glass",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Sea_Glass_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Sand",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Sand_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Charcoal",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Charcoal_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Eucalyptus",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Eucalyptus_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Ivory",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Ivory_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Indigo",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Indigo_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Linen",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Linen_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Orchid",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Orchid_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Ocean Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Ocean_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Slate",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Slate_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Silver",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Silver_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Violet",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Violet_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Soft Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Soft_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Ocean Blue Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Ocean_Blue_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Seaglass Stripe",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4569322_Seaglass_Stripe_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-4569322/simply-vera-vera-wang-signature-bath-towel-bath-sheet-hand-towel-or-washcloth.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": "https://media.kohlsimg.com/is/image/kohls/4569322_ALT",
        "prodType": "product",
        "displayColor": [
            "Seaglass Stripe"
        ],
        "availableColr": [
            "Sea Glass",
            "Sand",
            "Charcoal",
            "Eucalyptus",
            "Ivory",
            "Indigo",
            "Linen",
            "Orchid",
            "Ocean Blue",
            "Slate",
            "Silver",
            "Violet",
            "White",
            "Soft Black",
            "Ocean Blue Stripe",
            "Seaglass Stripe"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 8.79,
                "maxPrice": 27.99
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "1695762",
        "productTitle": "Women's Gloria Vanderbilt Amanda Classic Jeans",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/1695762_Madison?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 48,
                    "maxPrice": null
                },
                "salePrice": {
                    "minPrice": 24.99,
                    "maxPrice": null
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 22:56:08 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 22:56:08 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.4,
            "count": 18341
        },
        "swatchImages": [
            {
                "color": "Frisco",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Frisco_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Stonewood",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Stonewood_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Coffee Roast",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Coffee_Roast_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Rinse Noir",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Rinse_Noir_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Hazelnut",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Hazelnut_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Madison",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Madison_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Zermatt",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Zermatt_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Vintage White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Vintage_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Hartford",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Hartford_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Autumn Blaze",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Autumn_Blaze_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Rockville Whiskers",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Rockville_Whiskers_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Crimson Crush",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Crimson_Crush_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Hidden Forest",
                "URL": "https://media.kohlsimg.com/is/image/kohls/1695762_Hidden_Forest_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-1695762/gloria-vanderbilt-amanda-tapered-jeans-womens.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": "https://media.kohlsimg.com/is/image/kohls/1695762_ALT",
        "prodType": "product",
        "displayColor": [
            "Madison"
        ],
        "availableColr": [
            "Frisco",
            "Stonewood",
            "Coffee Roast",
            "Rinse Noir",
            "Black",
            "Hazelnut",
            "Madison",
            "Zermatt",
            "Vintage White",
            "Hartford",
            "Autumn Blaze",
            "Rockville Whiskers",
            "Crimson Crush",
            "Hidden Forest"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 19.99,
                "maxPrice": null
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "3401178",
        "productTitle": "Serta® 3-inch Soothing Cool Gel Memory Foam Mattress Topper",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/3401178?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 299.99,
                    "maxPrice": 459.99
                },
                "salePrice": {
                    "minPrice": 164.99,
                    "maxPrice": 252.99
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.3,
            "count": 4172
        },
        "swatchImages": [],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-3401178/serta-3-inch-soothing-cool-gel-memory-foam-mattress-topper.jsp",
        "variations": "Size",
        "altImageUrl": null,
        "prodType": "product",
        "displayColor": [
            "White"
        ],
        "availableColr": [
            "White"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 131.99,
                "maxPrice": 202.39
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "3910467",
        "productTitle": "Men's Sonoma Goods For Life® Supersoft Crewneck Tee",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/3910467_Dark_Sky?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 9.99,
                    "maxPrice": null
                },
                "salePrice": null,
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": null,
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.4,
            "count": 3691
        },
        "swatchImages": [
            {
                "color": "Medium Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Medium_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "New Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_New_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Maroon",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Maroon_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "New White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_New_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Grey",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Grey_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Favian Olive",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Favian_Olive_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Rose",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Rose_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Beige",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Beige_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Elgin Beige",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Elgin_Beige_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Dark Sky",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Dark_Sky_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Albany Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Albany_Blue_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Mystic Lagoon",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Mystic_Lagoon_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Mauve Ruffle",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Mauve_Ruffle_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Infantry Olive",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Infantry_Olive_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Navy White Feeder",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Navy_White_Feeder_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Delicate Wine",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3910467_Delicate_Wine_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-3910467/mens-sonoma-goods-for-life-supersoft-crewneck-tee.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": null,
        "prodType": "product",
        "displayColor": [
            "Dark Sky"
        ],
        "availableColr": [
            "Medium Blue",
            "New Black",
            "Maroon",
            "New White",
            "Grey",
            "Favian Olive",
            "Rose",
            "Beige",
            "Elgin Beige",
            "Dark Sky",
            "Albany Blue",
            "Mystic Lagoon",
            "Mauve Ruffle",
            "Infantry Olive",
            "Navy White Feeder",
            "Delicate Wine"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 7.99,
                "maxPrice": null
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "4303887",
        "productTitle": "Samsonite Ziplite 5 Hardside Spinner Luggage",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/4303887_Brushed_Anthracite?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 279.99,
                    "maxPrice": 419.99
                },
                "salePrice": {
                    "minPrice": 139.99,
                    "maxPrice": 209.99
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.7,
            "count": 3028
        },
        "swatchImages": [
            {
                "color": "Lagoon",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4303887_Lagoon_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Solar Rose",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4303887_Solar_Rose_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Brushed Anthracite",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4303887_Brushed_Anthracite_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Teal",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4303887_Teal_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Purple",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4303887_Purple_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Silver",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4303887_Silver_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Carribean Blue",
                "URL": "https://media.kohlsimg.com/is/image/kohls/4303887_Carribean_Blue_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-4303887/samsonite-ziplite-5-hardside-spinner-luggage.jsp",
        "variations": "SizeAndColor",
        "altImageUrl": null,
        "prodType": "product",
        "displayColor": [
            "Brushed Anthracite"
        ],
        "availableColr": [
            "Lagoon",
            "Solar Rose",
            "Brushed Anthracite",
            "Teal",
            "Purple",
            "Silver",
            "Carribean Blue"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 111.99,
                "maxPrice": 167.99
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    },
    {
        "webID": "3292246",
        "productTitle": "Keurig® K-Select® Single-Serve K-Cup Pod® Coffee Maker with Strength Control",
        "image": {
            "url": "https://media.kohlsimg.com/is/image/kohls/3292246_Graphite?wid=180&hei=180&op_sharpen=1",
            "height": "180",
            "width": "180"
        },
        "prices": [
            {
                "regularPrice": {
                    "minPrice": 169.99,
                    "maxPrice": null
                },
                "salePrice": {
                    "minPrice": 149.99,
                    "maxPrice": null
                },
                "displayBegDateTime": "2023/11/12 23:40:33 -0800",
                "displayEndDateTime": "2023/11/13 20:51:15 -0800",
                "purchaseBegDateTime": "2023/11/12 23:40:33 -0800",
                "purchaseEndDateTime": "2023/11/13 20:51:15 -0800",
                "isCurrentPrice": true,
                "regularPriceType": "Regular",
                "promotion": null,
                "statusCode": "20",
                "priceCode": "Normal",
                "salePriceStatus": "sale",
                "isSuppressed": false,
                "salePriceType": null,
                "isPriceInstore": false,
                "suppressedPricingText": null,
                "promotions": {
                    "tieredPrice": [],
                    "group": [],
                    "bogo": []
                }
            }
        ],
        "rating": {
            "avgRating": 4.3,
            "count": 7907
        },
        "swatchImages": [
            {
                "color": "Matte Black",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3292246_Matte_Black_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Graphite",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3292246_Graphite_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Vintage Red",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3292246_Vintage_Red_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Matte White",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3292246_Matte_White_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Matte Navy",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3292246_Matte_Navy_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Oasis",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3292246_Oasis_sw?wid=20&hei=20&op_sharpen=1"
            },
            {
                "color": "Sandstone",
                "URL": "https://media.kohlsimg.com/is/image/kohls/3292246_Sandstone_sw?wid=20&hei=20&op_sharpen=1"
            }
        ],
        "valueAddedIcons": [
            "best_seller"
        ],
        "valueAddedBadges": {
            "realTime": [
                "best_seller"
            ],
            "pricing": [],
            "other": []
        },
        "seoURL": "/product/prd-3292246/keurig-k-select-single-serve-k-cup-pod-coffee-maker.jsp",
        "variations": "Color",
        "altImageUrl": null,
        "prodType": "product",
        "displayColor": [
            "Graphite"
        ],
        "availableColr": [
            "Matte Black",
            "Graphite",
            "Vintage Red",
            "Matte White",
            "Matte Navy",
            "Oasis",
            "Sandstone"
        ],
        "isAvailableforShip": true,
        "isAvailableforPickUp": false,
        "boosted": false,
        "ypEligible": true,
        "sponsoredData": null,
        "sephoraProduct": false,
        "yourPriceInfo": {
            "yourPrice": {
                "minPrice": 119.99,
                "maxPrice": null
            },
            "offers": [
                {
                    "offerId": "70600",
                    "offerCode": "SAVEBIG20",
                    "disProrated": "false"
                }
            ],
            "ypEligibilityVal": "Eligible for Your Price"
        },
        "couponEligible": true,
        "isVGC": false
    }
]
