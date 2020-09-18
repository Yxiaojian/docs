module.exports = {
  title: "帮助文档",
  base: "docs",
  dest: "public",
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3],
    },
  },
  themeConfig: {
    sidebar: [
		'/',
		'/dsm_deploy',
		'/dsm_effect',
		'/dsm_function_client',
		'/dsm_function_system_auto',
		'/dsm_function_system_log',
		'/dsm_function_system_manual',
		'/dsm_function_system_overall',
		'/dsm_function_system_policy',
		'/dsm_function_system_role',
		'/dsm_function_system_security_domain',
		'/dsm_function_system_security_level',
		'/dsm_function_system_setting',
		'/dsm_function_system_terminal',
		'/dsm_function_system_user',
		'/dsm_function_system_workflow',
		'/dsm_overall',
		'/dsm_products',
		'/install',
		'/install_client',
		'/install_cloud',
		'/install_server'
    ]
      
  },
};