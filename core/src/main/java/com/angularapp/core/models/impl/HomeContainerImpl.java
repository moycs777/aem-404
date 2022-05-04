/*
 * ***********************************************************************
 * Angular App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Angular App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Angular App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Angular App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Angular App.
 * ***********************************************************************
 */

package com.angularapp.core.models.impl;

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.angularapp.core.models.HomeContainer;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    HomeContainer.class,
    ComponentExporter.class
}, resourceType = "angularapp/components/home-container")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HomeContainerImpl
    implements HomeContainer
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image logoHeader;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image logoBody;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bodyResume;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long resfreshTime;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String loginUrl;
    @SlingObject
    private Resource resource;

    @Override
    public com.adobe.cq.wcm.core.components.models.Image getLogoHeader() {
        return logoHeader;
    }

    @Override
    public com.adobe.cq.wcm.core.components.models.Image getLogoBody() {
        return logoBody;
    }

    @Override
    public String getBodyResume() {
        return bodyResume;
    }

    @Override
    public Long getResfreshTime() {
        return resfreshTime;
    }

    @Override
    @JsonProperty("url")
    public String getLoginUrl() {
        return loginUrl;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
