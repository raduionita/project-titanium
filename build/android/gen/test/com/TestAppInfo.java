package test.com;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class TestAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";

	public TestAppInfo(TiApplication app) {
	}

	public String getDeployType() {
		return "development";
	}

	public String getId() {
		return "test.com";
	}

	public String getName() {
		return "test";
	}

	public String getVersion() {
		return "1.0";
	}

	public String getPublisher() {
		return "stoica.catalin";
	}

	public String getUrl() {
		return "http://";
	}

	public String getCopyright() {
		return "2015 by stoica.catalin";
	}

	public String getDescription() {
		return "";
	}

	public String getIcon() {
		return "appicon.png";
	}

	public boolean isAnalyticsEnabled() {
		return true;
	}

	public String getGUID() {
		return "49f66a37-7387-4a01-9000-b89a9dc7dc32";
	}

	public boolean isFullscreen() {
		return false;
	}

	public String getBuildType() {
		return "";
	}
}
