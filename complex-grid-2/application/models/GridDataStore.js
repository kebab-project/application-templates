/**
 * __APP_NAME__ Application GridDataStore class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.__APP_NAME__.application.models
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
KebabOS.applications.__APP_NAME__.application.models.GridDataStore = Ext.extend(Kebab.library.ext.RESTfulDataStore, {

    bootstrap: null,

    restAPI: 'test/test',

    readerFields:[
        {name: 'id', type:'integer'},
        {name:'title', type:'string'},
        {name: 'description', type:'string'}
    ]
});