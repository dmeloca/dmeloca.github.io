# Solaris 
## ¿Qué es Solaris?
Solaris es un sistema operativo **Unix propietario**, desarrollado por Sun Microsystems y luego absorbido por Oracle. Está diseñado para **entornos empresariales**, donde la prioridad es la estabilidad, la seguridad y el rendimiento, no “ver si arranca hoy”.

Se usa en:
- Banca y finanzas  
- Gobierno  
- Centros de datos  
- Virtualización y cloud  
- Aplicaciones críticas

## Objetivo principal
Proveer una plataforma:
- Altamente **estable**
- **Segura**
- **Escalable**
- Con soporte para **hardware de alto nivel**

## Características clave
- Soporte para sistemas empresariales complejos  
- Alta disponibilidad y tolerancia a fallos  
- Virtualización integrada (Oracle VM Server for SPARC)  
- Gestión avanzada de servicios (SMF)  
- Seguridad avanzada (RBAC, controles obligatorios)  
- Manejo eficiente de grandes volúmenes de datos  

## Solaris vs Linux

| Aspecto | Solaris | Linux |
|-------|--------|-------|
| Licencia | Propietario (Oracle) | Open Source |
| Código fuente | Cerrado | Abierto |
| Gestión de servicios | SMF | systemd / init |
| Sistema de archivos | ZFS (nativo) | Ext4, XFS, ZFS (opcional) |
| Gestión de paquetes | IPS / pkgadd | APT, YUM, DNF |
| Seguridad | RBAC, MAC | Permisos clásicos, SELinux/AppArmor |
| Uso principal | Empresas críticas | Escritorio, servidores, cloud |

## Estructura de directorios

| Directorio | Descripción |
|----------|------------|
| / | Directorio raíz |
| /bin | Binarios esenciales |
| /boot | Archivos de arranque |
| /dev | Dispositivos |
| /etc | Configuración del sistema |
| /home | Directorios de usuarios |
| /kernel | Archivos del kernel |
| /lib | Librerías del sistema |
| /lost+found | Archivos recuperados |
| /mnt | Montajes temporales |
| /opt | Software opcional |
| /proc | Información de procesos |
| /sbin | Binarios administrativos |
| /tmp | Archivos temporales |
| /usr | Programas y datos del sistema |
| /var | Logs y datos variables |

## Gestión de paquetes

| Sistema | Comando |
|-------|--------|
| Ubuntu | apt-get install paquete |
| Solaris | pkgadd -d paquete |

Nota: Solaris usa **RBAC**. `sudo` llegó tarde a la fiesta (Solaris 11).

## Información del sistema

| Sistema | Comando |
|-------|--------|
| Linux | uname -a |
| Solaris | showrev -a |

`showrev` da más detalles, porque Solaris es intenso incluso para describirse.

## Permisos

| Acción | Linux | Solaris |
|-----|------|--------|
| Cambiar permisos | chmod | chmod |
| Buscar SUID | find / -perm 4000 | find / -perm -4000 |


## NFS en Solaris
- Compartir directorios: `share`
- Configuración persistente: `/etc/dfs/dfstab`
- Montaje: `mount -F nfs`

Ejemplo:
```bash
share -F nfs -o rw /export/home
```

## Procesos abiertos
| Sistema | Herramienta |
|---------|-------------|
| Linux | lsof |
| Solaris | pfiles |

## Trazado de procesos
| Sistema | Herramienta |
|---------|-------------|
| Linux | strace |
| Solaris | truss |

Diferencias:

- `truss` puede rastrear señales y procesos hijos

# Conclusion
Solaris no es para experimentar ni para aprender “por curiosidad”. Es un sistema hecho para no fallar, usado donde un error cuesta dinero, reputación o ambos. Linux es flexible y abierto. Solaris es rígido, cerrado y absurdamente confiable. Cada uno cumple su rol.

