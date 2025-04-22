package com.sudhakar;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.ServletContextHandler;

public class App {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);

        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        context.setResourceBase(App.class.getClassLoader().getResource("public").toExternalForm());
        context.addServlet(DefaultServlet.class, "/");

        server.setHandler(context);
        server.start();
        System.out.println("🌱 SUDHAKAR Agriculture Website is running at http://localhost:8080");
        server.join();
    }
}

