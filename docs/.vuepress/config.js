module.exports = {
    title: '个人开发总结',
    description: '借助于vuepress搭建的',
    base:'/nikyblog/',
    dest:'dist',
    themeConfig:{
        editLinks: false,
        docsDir: 'docs',
        nav: [
        ],
        sidebar:[
            {
                title: 'vue相关',
                collapsable: false,
                children: [
                    ['vue/', '简介'],
                    ['vue/basekonwlage','基本知识'],
                ]
            },
            {
                title:'移动端布局',
                collapsable:false,
                children:[
                    ['mobile/','布局概况'],//进入readme
                    ['mobile/layout_mobile','知识概括']
                ]
            }
        ]
    }
}
