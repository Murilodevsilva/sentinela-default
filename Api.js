

export default {
  
  "_type": "export",
  "__export_format": 4,
  "__export_date": "2022-11-11T20:02:16.372Z",
  "__export_source": "insomnia.desktop.app:v2022.6.0",
  "resources": [
    {
      "_id": "req_26c165037e1840ba878c9bca87c2affa",
      "parentId": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "modified": 1656550553805,
      "created": 1645782871087,
      "url": "{{ _.api_url }}/sanctum/csrf-cookie",
      "name": "My Request",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [],
      "authentication": {},
      "metaSortKey": -1655939464626,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "parentId": null,
      "modified": 1645782866274,
      "created": 1645782866274,
      "name": "Sentinela API",
      "description": "",
      "scope": "collection",
      "_type": "workspace"
    },
    {
      "_id": "req_2b8033c3f3784822ab4e572def727f95",
      "parentId": "fld_356db96b1da04a85a9b4975363980ad4",
      "modified": 1662736038351,
      "created": 1655939466126,
      "url": "{{ _.api_url }}/auth/me",
      "name": "me",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_94923e5c2db7408bbc1272985441f6e1",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}"
      },
      "metaSortKey": -1655939466226,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_356db96b1da04a85a9b4975363980ad4",
      "parentId": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "modified": 1655939464576,
      "created": 1655939464576,
      "name": "auth",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1655939464576,
      "_type": "request_group"
    },
    {
      "_id": "req_b1b90fa2a776498ca41583deb82af77e",
      "parentId": "fld_356db96b1da04a85a9b4975363980ad4",
      "modified": 1659993862929,
      "created": 1655962652433,
      "url": "{{ _.api_url }}/auth/register",
      "name": "register",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"email\": \"nicollasfrazao@gmail.com\",\n\t\"password\": \"123456\",\n\t\"device_name\": \"Nome do Dispositivo\"\n}"
      },
      "parameters": [],
      "headers": [
        {
          "id": "pair_aa5cc62a8c5b41ebad6ccdd425f458cd",
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "description": ""
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_6d516e42b47a48248b4f329914dd1ae7"
        }
      ],
      "authentication": {},
      "metaSortKey": -1655939466176,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_eb8e4f7eb39e4d198887da88ae4e03b2",
      "parentId": "fld_356db96b1da04a85a9b4975363980ad4",
      "modified": 1668196869723,
      "created": 1655940281220,
      "url": "{{ _.api_url }}/auth/login",
      "name": "login",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"email\": \"laiane.bezerra@example.net\",\n\t\"password\": \"123456\",\n\t\"device_name\": \"api\"\n}"
      },
      "parameters": [],
      "headers": [
        {
          "id": "pair_aa5cc62a8c5b41ebad6ccdd425f458cd",
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "description": "",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_e1e8c23ed9344f12a87e1efebc588f2a"
        }
      ],
      "authentication": {},
      "metaSortKey": -1655939466151,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_5e71d90bf03f459089eeb59ffcf2f021",
      "parentId": "fld_356db96b1da04a85a9b4975363980ad4",
      "modified": 1659993863799,
      "created": 1655948737974,
      "url": "{{ _.api_url }}/auth/logout",
      "name": "logout",
      "description": "",
      "method": "DELETE",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "id": "pair_aa5cc62a8c5b41ebad6ccdd425f458cd",
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "description": ""
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}"
      },
      "metaSortKey": -1655939465001,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_e4bb00fb27974e56ad3b5ec0828a41a6",
      "parentId": "fld_ae8557662b764998802b20f67151e4e5",
      "modified": 1659993856447,
      "created": 1657825775506,
      "url": "{{ _.api_url }}/users/",
      "name": "index",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_0a818e82e78347e684d2b781c1fe7a0f",
          "name": "search",
          "value": "Otorr",
          "description": ""
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464501,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_ae8557662b764998802b20f67151e4e5",
      "parentId": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "modified": 1657828634939,
      "created": 1657825775467,
      "name": "users",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1655939464551,
      "_type": "request_group"
    },
    {
      "_id": "req_319f9240f1f9411aa022c2f09dddc2d0",
      "parentId": "fld_96fca876ca5b469990f357430348d074",
      "modified": 1663025099451,
      "created": 1659993927817,
      "url": "{{ _.api_url }}/schedulings/me",
      "name": "me",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_9509338bc71f4b95bc62e4eae2bbd68c",
          "name": "search",
          "value": "Thaís",
          "description": "",
          "disabled": true
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464526,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_96fca876ca5b469990f357430348d074",
      "parentId": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "modified": 1659993984993,
      "created": 1659993927814,
      "name": "schedulings",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1655939464538.5,
      "_type": "request_group"
    },
    {
      "_id": "req_a09eb353e2994193b6d1b89d0eda8912",
      "parentId": "fld_a820d84613ca4287b8ba1d336d574398",
      "modified": 1660002855834,
      "created": 1659993934033,
      "url": "{{ _.api_url }}/companies/4/schedulings",
      "name": "index",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_9509338bc71f4b95bc62e4eae2bbd68c",
          "name": "search",
          "value": "Thaís",
          "description": "",
          "disabled": true
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464526,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_a820d84613ca4287b8ba1d336d574398",
      "parentId": "fld_3cf1c3a9cfe24ab1b9da95a821abeb23",
      "modified": 1659993934031,
      "created": 1659993934031,
      "name": "schedulings",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1656368499003,
      "_type": "request_group"
    },
    {
      "_id": "fld_3cf1c3a9cfe24ab1b9da95a821abeb23",
      "parentId": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "modified": 1656367322725,
      "created": 1656367317379,
      "name": "companies",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1655939464526,
      "_type": "request_group"
    },
    {
      "_id": "req_8e4824d63bb445728a214b4e7a1cb897",
      "parentId": "fld_a820d84613ca4287b8ba1d336d574398",
      "modified": 1660002392106,
      "created": 1659993934036,
      "url": "{{ _.api_url }}/companies/4/schedulings",
      "name": "store",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"user_id\": 3,\n\t\"room_id\": 31,\n\t\"company_doctor_id\": 61,\n\t\"happen_at\": \"2022-08-10 13:00:00\"\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_d4773a8041cf440f946926cea9059b73"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464513.5,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_3e763c5c602149ffbef101e015697afa",
      "parentId": "fld_a820d84613ca4287b8ba1d336d574398",
      "modified": 1660002388105,
      "created": 1659993934040,
      "url": "{{ _.api_url }}/companies/4/schedulings/1",
      "name": "show",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464507.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_419d5cbad4f644f9897834f1d2c0d129",
      "parentId": "fld_a820d84613ca4287b8ba1d336d574398",
      "modified": 1660002393691,
      "created": 1659993934044,
      "url": "{{ _.api_url }}/companies/4/schedulings/3",
      "name": "update",
      "description": "",
      "method": "PATCH",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"user_id\": null,\n\t\"room_id\": null,\n\t\"company_doctor_id\": null,\n\t\"happen_at\": null,\n\t\"is_closed\": null\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_d4773a8041cf440f946926cea9059b73"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464457.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_b743315c52e741ee82fb2cd2ba496c57",
      "parentId": "fld_a820d84613ca4287b8ba1d336d574398",
      "modified": 1660002394212,
      "created": 1659993934050,
      "url": "{{ _.api_url }}/companies/4/schedulings/3",
      "name": "destroy",
      "description": "",
      "method": "DELETE",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464407.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_e712d975d08d4861bcef398d940b61ef",
      "parentId": "fld_6172319c3758441482cb5768630db876",
      "modified": 1660002486052,
      "created": 1659988581913,
      "url": "{{ _.api_url }}/companies/4/rooms",
      "name": "index",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_9509338bc71f4b95bc62e4eae2bbd68c",
          "name": "search",
          "value": "Thaís",
          "description": "",
          "disabled": true
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464526,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_6172319c3758441482cb5768630db876",
      "parentId": "fld_3cf1c3a9cfe24ab1b9da95a821abeb23",
      "modified": 1659988583630,
      "created": 1659988581905,
      "name": "rooms",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1656368498978,
      "_type": "request_group"
    },
    {
      "_id": "req_4877d416bd894626b8703aefb24bf9ec",
      "parentId": "fld_6172319c3758441482cb5768630db876",
      "modified": 1659991988083,
      "created": 1659988581919,
      "url": "{{ _.api_url }}/companies/4/rooms",
      "name": "store",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"name\": \"Teste\",\n\t\"rtsp_link\": null\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_d4773a8041cf440f946926cea9059b73"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464513.5,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_4880d104887a4567848a8169df6f21d6",
      "parentId": "fld_6172319c3758441482cb5768630db876",
      "modified": 1659991989150,
      "created": 1659988581922,
      "url": "{{ _.api_url }}/companies/4/rooms/32",
      "name": "show",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464507.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_bfca59a54c1c419fbd65bb879ed5718c",
      "parentId": "fld_6172319c3758441482cb5768630db876",
      "modified": 1659991989623,
      "created": 1659988581926,
      "url": "{{ _.api_url }}/companies/4/rooms/3",
      "name": "update",
      "description": "",
      "method": "PATCH",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"name\": \"Teste\",\n\t\"rtsp_link\": null\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_d4773a8041cf440f946926cea9059b73"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464457.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_8134c265cfdc494192c997b967829004",
      "parentId": "fld_6172319c3758441482cb5768630db876",
      "modified": 1659991990301,
      "created": 1659988581930,
      "url": "{{ _.api_url }}/companies/4/rooms/3",
      "name": "destroy",
      "description": "",
      "method": "DELETE",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464407.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_5090a5e0a0064cd2bbcfffcc9fcef92a",
      "parentId": "fld_b264404316c0484699b862cd4cc48adf",
      "modified": 1663023931978,
      "created": 1656367337233,
      "url": "{{ _.api_url }}/companies/4/patients",
      "name": "index",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_9509338bc71f4b95bc62e4eae2bbd68c",
          "name": "search",
          "value": "Thaís",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464526,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_b264404316c0484699b862cd4cc48adf",
      "parentId": "fld_3cf1c3a9cfe24ab1b9da95a821abeb23",
      "modified": 1656368498928,
      "created": 1656368498928,
      "name": "patients",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1656368498928,
      "_type": "request_group"
    },
    {
      "_id": "req_3622de2e41c84cbf809998b55ba8fa32",
      "parentId": "fld_b264404316c0484699b862cd4cc48adf",
      "modified": 1659992283331,
      "created": 1657143300776,
      "url": "{{ _.api_url }}/companies/4/patients",
      "name": "store",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"user_id\": null,\n\t\"name\": \"Nícollas\",\n\t\"surname\": \"Frazão\",\n\t\"email\": \"nicollasfrazao@gmail.com\",\n\t\"password\": \"123456\",\n\t\"phone\": \"13991884678\",\n\t\"gender\": \"male\",\n\t\"marital_status\": \"single\",\n\t\"CEP\": \"11347010\",\n\t\"address\": \"Rua Ibrahim Abdala Set El Banat\",\n\t\"number\": \"50\",\n\t\"complement\": \"Casa\",\n\t\"district\": \"Jardim Rio Branco\",\n\t\"city\": \"São Vicente\",\n\t\"UF\": \"SP\",\n\t\"CPF\": null,\n\t\"RG\": null,\n\t\"SUS\": \"123456789\",\n\t\"health_insurance_name\": null,\n\t\"health_insurance_number\": null\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_d4773a8041cf440f946926cea9059b73"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464513.5,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_0947b9b7293b4554a7088c8d7e6e6314",
      "parentId": "fld_b264404316c0484699b862cd4cc48adf",
      "modified": 1659988606142,
      "created": 1657145772067,
      "url": "{{ _.api_url }}/companies/4/patients/9",
      "name": "show",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464507.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_087e31dd2c1c4958be7319954cf01e76",
      "parentId": "fld_b264404316c0484699b862cd4cc48adf",
      "modified": 1659992287634,
      "created": 1657146257024,
      "url": "{{ _.api_url }}/companies/4/patients/3",
      "name": "update",
      "description": "",
      "method": "PATCH",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"name\": \"Nícollas\",\n\t\"surname\": \"Frazão\",\n\t\"email\": \"nicollasfrazao@hotmail.com\",\n\t\"password\": \"123456\",\n\t\"phone\": \"13991884678\",\n\t\"gender\": \"male\",\n\t\"marital_status\": \"single\",\n\t\"CEP\": \"11347010\",\n\t\"address\": \"Rua Ibrahim Abdala Set El Banat\",\n\t\"number\": \"50\",\n\t\"complement\": \"Casa\",\n\t\"district\": \"Jardim Rio Branco\",\n\t\"city\": \"São Vicente\",\n\t\"UF\": \"SP\",\n\t\"CPF\": null,\n\t\"RG\": null,\n\t\"SUS\": \"123456789\",\n\t\"health_insurance_name\": null,\n\t\"health_insurance_number\": null\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_d4773a8041cf440f946926cea9059b73"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464457.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_19b6509a15a445cc8eb9d0de359c06f8",
      "parentId": "fld_b264404316c0484699b862cd4cc48adf",
      "modified": 1657147665653,
      "created": 1657146490483,
      "url": "{{ _.api_url }}/companies/4/patients/3",
      "name": "destroy",
      "description": "",
      "method": "DELETE",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464407.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_1b46229ec5d94850a852c89f9f499bb7",
      "parentId": "fld_2cd29583058a4948b872d1aa1026023a",
      "modified": 1663023934909,
      "created": 1657828987546,
      "url": "{{ _.api_url }}/companies/4/doctors",
      "name": "index",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_b717e2d82fad4f1584fb0e91008f5783",
          "name": "search",
          "value": "Cauan",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464526,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_2cd29583058a4948b872d1aa1026023a",
      "parentId": "fld_3cf1c3a9cfe24ab1b9da95a821abeb23",
      "modified": 1657828987543,
      "created": 1657828987543,
      "name": "doctors",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1656153981752,
      "_type": "request_group"
    },
    {
      "_id": "req_651171ceac2d48a89d594dc285db37da",
      "parentId": "fld_2cd29583058a4948b872d1aa1026023a",
      "modified": 1662736178894,
      "created": 1657828987550,
      "url": "{{ _.api_url }}/companies/4/doctors",
      "name": "store",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"user_id\": 3,\n\t\"name\": \"Nícollas\",\n\t\"surname\": \"Frazão\",\n\t\"email\": \"nicollasfrazao@hotmail.com\",\n\t\"password\": \"123456\",\n\t\"phone\": \"13991884678\",\n\t\"gender\": \"male\",\n\t\"marital_status\": \"single\",\n\t\"CEP\": \"11347010\",\n\t\"address\": \"Rua Ibrahim Abdala Set El Banat\",\n\t\"number\": \"50\",\n\t\"complement\": \"Casa\",\n\t\"district\": \"Jardim Rio Branco\",\n\t\"city\": \"São Vicente\",\n\t\"UF\": \"SP\",\n\t\"CPF\": null,\n\t\"RG\": null,\n\t\"CRM\": \"123456\",\n\t\"occupations\": [\"Otorrinolaringologia\"]\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_d4773a8041cf440f946926cea9059b73"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464513.5,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_64c1951cc9984a8098df41c74c7c5e0b",
      "parentId": "fld_2cd29583058a4948b872d1aa1026023a",
      "modified": 1662159956275,
      "created": 1657828987553,
      "url": "{{ _.api_url }}/companies/4/doctors/3",
      "name": "show",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464507.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_1f4051a36ffd4e38803b8e50172ce5a5",
      "parentId": "fld_2cd29583058a4948b872d1aa1026023a",
      "modified": 1662736207868,
      "created": 1657828987556,
      "url": "{{ _.api_url }}/companies/4/doctors/3",
      "name": "update",
      "description": "",
      "method": "PATCH",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"name\": \"Nícollas\",\n\t\"surname\": \"Frazão\",\n\t\"email\": \"nicollasfrazao@hotmail.com\",\n\t\"password\": \"123456\",\n\t\"phone\": \"13991884678\",\n\t\"gender\": \"male\",\n\t\"marital_status\": \"single\",\n\t\"CEP\": \"11347010\",\n\t\"address\": \"Rua Ibrahim Abdala Set El Banat\",\n\t\"number\": \"50\",\n\t\"complement\": \"Casa\",\n\t\"district\": \"Jardim Rio Branco\",\n\t\"city\": \"São Vicente\",\n\t\"UF\": \"SP\",\n\t\"CPF\": null,\n\t\"RG\": null,\n\t\"CRM\": \"123456\",\n\t\"occupations\": [\"Otorrinolaringologia\", \"Teste\"]\n}"
      },
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        },
        {
          "name": "Content-Type",
          "value": "application/json",
          "id": "pair_d4773a8041cf440f946926cea9059b73"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464457.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_10e1585a465b4577b9bfad2e18274aee",
      "parentId": "fld_2cd29583058a4948b872d1aa1026023a",
      "modified": 1657830438503,
      "created": 1657828987560,
      "url": "{{ _.api_url }}/companies/4/doctors/3",
      "name": "destroy",
      "description": "",
      "method": "DELETE",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464407.25,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_b08bf7a64188419988b50848071cac9f",
      "parentId": "fld_09aa3361139c4b69a810f047b33c9afc",
      "modified": 1663025557823,
      "created": 1656367328428,
      "url": "{{ _.api_url }}/companies/me",
      "name": "index",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_2acc5fd8d8864430957682924ed44b20",
          "name": "search",
          "value": "teste",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4",
          "disabled": false
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464476,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_09aa3361139c4b69a810f047b33c9afc",
      "parentId": "fld_3cf1c3a9cfe24ab1b9da95a821abeb23",
      "modified": 1659548001636,
      "created": 1659547984612,
      "name": "me",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1656046723126.5,
      "_type": "request_group"
    },
    {
      "_id": "req_b1e9ed0a08ab4d648b46ce25b11d891c",
      "parentId": "fld_09aa3361139c4b69a810f047b33c9afc",
      "modified": 1663097134377,
      "created": 1659547925623,
      "url": "{{ _.api_url }}/companies/me/owner",
      "name": "owner",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_2acc5fd8d8864430957682924ed44b20",
          "name": "search",
          "value": "teste",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464451,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_64faeb7ae1e040af8b5c81b219326b67",
      "parentId": "fld_09aa3361139c4b69a810f047b33c9afc",
      "modified": 1659988613276,
      "created": 1659547953011,
      "url": "{{ _.api_url }}/companies/me/receptionist",
      "name": "receptionist",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_2acc5fd8d8864430957682924ed44b20",
          "name": "search",
          "value": "teste",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464426,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_9bdd8f26a6fa4f049bf6184f3db273e0",
      "parentId": "fld_09aa3361139c4b69a810f047b33c9afc",
      "modified": 1659557951925,
      "created": 1659547973513,
      "url": "{{ _.api_url }}/companies/me/doctor",
      "name": "doctor",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_2acc5fd8d8864430957682924ed44b20",
          "name": "search",
          "value": "teste",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464376,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_ddf19069eeae494da44fe377f4250cda",
      "parentId": "fld_09aa3361139c4b69a810f047b33c9afc",
      "modified": 1659557950054,
      "created": 1659547963418,
      "url": "{{ _.api_url }}/companies/me/patient",
      "name": "patient",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_2acc5fd8d8864430957682924ed44b20",
          "name": "search",
          "value": "teste",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464326,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_f1cfe751cc2f4f13950260152dd221f9",
      "parentId": "fld_3cf1c3a9cfe24ab1b9da95a821abeb23",
      "modified": 1663025556520,
      "created": 1656368505762,
      "url": "{{ _.api_url }}/companies/",
      "name": "index",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_0a818e82e78347e684d2b781c1fe7a0f",
          "name": "search",
          "value": "teste",
          "description": "",
          "disabled": true
        }
      ],
      "headers": [
        {
          "name": "X-Requested-With",
          "value": "XMLHttpRequest",
          "id": "pair_beb7666f6d984d26a735cafef1907dc4"
        }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{ _.token }}",
        "disabled": false
      },
      "metaSortKey": -1655939464501,
      "isPrivate": false,
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "env_9a1d45ffef68fcf857196390e30ba47e9ca417b3",
      "parentId": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "modified": 1655939759776,
      "created": 1645782866281,
      "name": "Base Environment",
      "data": {},
      "dataPropertyOrder": {},
      "color": null,
      "isPrivate": false,
      "metaSortKey": 1645782866281,
      "_type": "environment"
    },
    {
      "_id": "jar_9a1d45ffef68fcf857196390e30ba47e9ca417b3",
      "parentId": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "modified": 1656551846428,
      "created": 1645782866285,
      "name": "Default Jar",
      "cookies": [
        {
          "key": "XSRF-TOKEN",
          "value": "eyJpdiI6Ik00QW9sQ1NidEZQcXNEOEtvRi9tL0E9PSIsInZhbHVlIjoiSjRxcG1HcHUwNFI0aGVKd2R1Q3g2RDlrWGxZdFFCTFBDamRFNDROb1lsYlJOUGhvd2lBeFRWRWFsWkI4dmZzU2I4Q3haTGU0TW9FNFJYZ1pmdHhidEg3d3BDWW5mNklYcEdjWkkxeUZHMnNhUFhGdkZBTHlBeW0zVFd3MnJSMW4iLCJtYWMiOiI4OGEzMGExNjQ5NzQ1YmRiZDE3OTNiNWQzMjBmN2VjY2E5ZDU3MzNiNDE2OThhZmQ5MzNlODY4ODgxNmFiODQ3IiwidGFnIjoiIn0%3D",
          "expires": "2022-06-23T04:34:43.000Z",
          "maxAge": 7200,
          "domain": "sentinela.local",
          "path": "/",
          "extensions": [
            "samesite=lax"
          ],
          "hostOnly": true,
          "creation": "2022-06-22T23:40:07.108Z",
          "lastAccessed": "2022-06-23T02:34:43.626Z",
          "id": "7798120357693783"
        },
        {
          "key": "sentinela_session",
          "value": "eyJpdiI6IlVCbUpqV1cybDlnMXArV3c5cjk3UGc9PSIsInZhbHVlIjoiYUJxNnVZK2F1aE44SURHNklxYWZKSzhqNURXUTFiZ0RZbGFDd3h3WXVoQ1R5by9IYWFhR1h1UW1mWllMMExkWDRNMk54TGxFRituZ3NnWjhKSm5VVlYybkdEcGExMFJnejlza2ZrNWwveGJNTXJOVjFkZjByMlZ2V0gxTW0xcy8iLCJtYWMiOiI3OTQ0OTU1ZmU0MzMzMjI4YTFlZjY4NDA5YmUyZjcwMWE1NTZmMTk3YWNiODZiYWZhMjgxZDA2MWIxYmNjZGUxIiwidGFnIjoiIn0%3D",
          "expires": "2022-06-23T04:34:43.000Z",
          "maxAge": 7200,
          "domain": "sentinela.local",
          "path": "/",
          "httpOnly": true,
          "extensions": [
            "samesite=lax"
          ],
          "hostOnly": true,
          "creation": "2022-06-22T23:40:07.109Z",
          "lastAccessed": "2022-06-23T02:34:43.626Z",
          "id": "9479461507408988"
        },
        {
          "key": "XSRF-TOKEN",
          "value": "eyJpdiI6IjRaWmM4UjhROGYvM05DeVdoUUhpT3c9PSIsInZhbHVlIjoiUjFjK2VodGhFTUhDdlRVSDF0SXJwNW9DVFZJckNpOHZkNE5mNnd6MmQ2bEd0VnRMU2I2VWxHMEFva3Frclk3UDJjZ2lYcnRnc0RucTJZbnpGdXlGNUIxQkxxUVp4ajErRzA2dW1KZU4zOVU0NmxwamFJaCtDYnplQUpoRkM4cm8iLCJtYWMiOiIxOTI5NTY1YjQ3ZGQ3MjAxMWU2ZjcyMmFhNmY5ZTE1M2ZkYTNkMjM1ZWU2MjYzOWUyNjY4OGQzZjc2Y2Y3N2JlIiwidGFnIjoiIn0%3D",
          "expires": "2022-06-30T03:17:21.000Z",
          "maxAge": 7200,
          "domain": "161.35.255.151",
          "path": "/",
          "extensions": [
            "samesite=lax"
          ],
          "hostOnly": true,
          "creation": "2022-06-30T01:17:26.427Z",
          "lastAccessed": "2022-06-30T01:17:26.427Z",
          "id": "6290831063067102"
        },
        {
          "key": "sentinela_session",
          "value": "eyJpdiI6ImJCZ3ZJaWhIbzI3U3BMUklBOG5McEE9PSIsInZhbHVlIjoiczBQTnA0Y0FyN1JvZDFjQmdyQ0xyNFVUcUR6Q0dBUzJZTENSci9yNnI4Unc0SEhhQ3ZZc2IwaEhNUTJhaHZ3TWJtTDNmVGkrakV6M1lOejZEZlpVNzdDempackgyc1pRUnpJS1JkM0g4KytZNWo1bXQxYS9KVUwyYWM5MEVqTUgiLCJtYWMiOiI3MzFkOTYzNGVmNmMwNmNmZTNhMjM0MGZiMGFhNWMyNjgwMDg5Mjg1YmJhOWQwNGE4YTcxZDczYTlkOWYwMmVjIiwidGFnIjoiIn0%3D",
          "expires": "2022-06-30T03:17:21.000Z",
          "maxAge": 7200,
          "domain": "161.35.255.151",
          "path": "/",
          "httpOnly": true,
          "extensions": [
            "samesite=lax"
          ],
          "hostOnly": true,
          "creation": "2022-06-30T01:17:26.427Z",
          "lastAccessed": "2022-06-30T01:17:26.427Z",
          "id": "35041690342003706"
        }
      ],
      "_type": "cookie_jar"
    },
    {
      "_id": "spc_b3cbd4dd68494b4286683e5366e0b1cb",
      "parentId": "wrk_7a3bcc81f3d74339a4e3c03425e1850e",
      "modified": 1645782866275,
      "created": 1645782866275,
      "fileName": "Sentinela API",
      "contents": "",
      "contentType": "yaml",
      "_type": "api_spec"
    },
    {
      "_id": "env_235fc32e9b57499783c80989dee6c2c8",
      "parentId": "env_9a1d45ffef68fcf857196390e30ba47e9ca417b3",
      "modified": 1656551154649,
      "created": 1655939732602,
      "name": "Local",
      "data": {
        "api_url": "http://sentinela.local:8082/api",
        "token": "1|Nhtgsd3AKLI1r60uMpP6tyJxNApNAmhR6OQhFD5j"
      },
      "dataPropertyOrder": {
        "&": [
          "api_url",
          "token"
        ]
      },
      "color": null,
      "isPrivate": false,
      "metaSortKey": 1655939732602,
      "_type": "environment"
    },
    {
      "_id": "env_90e6651f0623418e8ab9a697eafc2b20",
      "parentId": "env_9a1d45ffef68fcf857196390e30ba47e9ca417b3",
      "modified": 1657828670926,
      "created": 1655968450634,
      "name": "Production",
      "data": {
        "api_url": "https://api.segnuv.com.br/api",
        "token": "138|KmulkibL8oeIWnvWWqNYdsaPdvQeXKr0EARfa2VD"
      },
      "dataPropertyOrder": {
        "&": [
          "api_url",
          "token"
        ]
      },
      "color": null,
      "isPrivate": false,
      "metaSortKey": 1655968450634,
      "_type": "environment"
    }
  ]

}