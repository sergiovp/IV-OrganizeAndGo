# Configuración de Git.

Como sabemos, es esencial tener correctamente configurado el entorno de desarrollo para abordar proyectos de forma más clara y eficiente. En este caso, configuraremos Git.

### Configuración del nombre y correo electrónico.

Con esta configuración, el nombre y correo electrónico aparecerán en los commits correctamente.

![imagen de la configuración](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/doc/images/git_nombre_correo.png)

### Creación de par de claves.

![imagen de la configuración](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/doc/images/git_ssh_keys.png)

Como podemos apreciar en la siguiente imagen, al hacer un `push`, antes me pedía la contraseña.

![imagen de la configuración](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/doc/images/git_pass.png)

Tras la configuración de las claves y cambiar la URL remota de HTTPS a SSH, podemos ver como no necesito introducir la contraseña para hacer `push`. Esto indica que la configuración ha sido realizada con éxito.

![imagen de la configuración](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/doc/images/git_no_pass.png)